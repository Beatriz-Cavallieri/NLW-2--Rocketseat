import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";

export default function TeachersList() {
  return (
    <div id="page-teachers-list" className="container">
      <PageHeader title="Estes são os professores disponíveis:">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="weekday" label="Dia da semana" />
          <Input name="time" label="horário" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
