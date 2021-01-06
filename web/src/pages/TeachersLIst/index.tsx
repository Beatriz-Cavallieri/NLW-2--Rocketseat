import React, { FormEvent, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";
import { Teacher } from "../../components/TeacherItem";
import api from "../../services/api";

import "./styles.css";

export default function TeachersList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  const [teachers, setTeachers] = useState([]);

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();
    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(response.data);
  };

  return (
    <div id="page-teachers-list" className="container">
      <PageHeader title="Estes são os professores disponíveis:">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matemática", label: "Matemática" },
              { value: "História do Brasil", label: "História do Brasil" },
              { value: "Literatura", label: "Literatura" },
            ]}
          />
          <Select
            name="weekday"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => setWeek_day(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            name="time"
            label="Horário"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button>Pesquisar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem teacher={teacher} />
        ))}
      </main>
    </div>
  );
}
