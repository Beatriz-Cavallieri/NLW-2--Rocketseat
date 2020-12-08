import express from "express";
import ClassesController from "./controllers/ClassesController";

const routes = express.Router();
const classesControllers = new ClassesController();

// Criar aulas
routes.post("/classes", classesControllers.create);

routes.get("/classes", classesControllers.index);

export default routes;