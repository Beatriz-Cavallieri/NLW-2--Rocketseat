import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";


import "./styles.css";

export default function TeachersList() {
  return (
    <div id="page-teachers-list" className="container">
      <PageHeader title="Estes são os professores disponíveis:">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="weekday">Dia da semana</label>
            <input type="text" id="weekday" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  );
}
