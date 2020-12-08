import React, { useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import warningIcon from "../../assets/images/icons/warning.svg";
import "./styles.css";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

export default function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend> Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend> Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matemática", label: "Matemática" },
              { value: "História do Brasil", label: "História do Brasil" },
              { value: "Literatura", label: "Literatura" },
            ]}
          />
          <Input name="cost" label="Custo da sua aula-hora" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((item) => (
            <div className="schedule-item" key={item.week_day}>
              <Select
                name="weekday"
                label="Dia da semana"
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
              <Input type="time" name="from" label="Das" />
              <Input type="time" name="to" label="Até" />
            </div>
          ))}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}
