import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";

export default function TeachersList() {
  return (
    <div id="page-teachers-list" className="container">
      <PageHeader title="Estes são os professores disponíveis:">
        <form id="search-teachers">

        <Select name="subject" label="Matéria"
          options={[
            {value: 'Artes', label: 'Artes'},
            {value: 'Geografia', label: 'Geografia'},
            {value: 'Matemática', label: 'Matemática'},
            {value: 'História do Brasil', label: 'História do Brasil'},
            {value: 'Literatura', label: 'Literatura'}
          ]} />
        <Select name="weekday" label="Dia da semana"
          options={[
            {value: '0', label: 'Domingo'},
            {value: '1', label: 'Segunda-feira'},
            {value: '2', label: 'Terça-feira'},
            {value: '3', label: 'Quarta-feira'},
            {value: '4', label: 'Quinta-feira'},
            {value: '5', label: 'Sexta-feira'},
            {value: '6', label: 'Sábado'}
          ]} />
          <Input name="time" label="Horário" type="time" />
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
