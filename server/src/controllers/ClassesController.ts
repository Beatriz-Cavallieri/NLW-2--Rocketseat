import { Request, Response } from "express";

import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    // sem filtros
    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: "Missing filters to search classes",
      });
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
          .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "user_id")
      .select(["classes.*", "users.*"]);

    return res.json(classes);
  }

  async create(req: Request, res: Response) {
    // os dados vem no corpo da requisição
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;
    const trx = await db.transaction();

    try {
      //professor
      const insertedUserIds = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUserIds[0];

      //aula
      const insertedClassIds = await trx("classes").insert({
        subject,
        cost,
        user_id, // professor
      });

      const class_id = insertedClassIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx("class_schedule").insert(classSchedule);

      await trx.commit();

      return res.status(201).send();
    } catch (error) {
      //desfazer qq inserção no BD q tenha sido feita até dar o erro
      await trx.rollback();
      return res
        .status(400)
        .json({ error: "Unexpected eror while creating new class" });
    }
  }
}
