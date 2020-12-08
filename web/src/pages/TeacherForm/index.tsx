import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import warningIcon from "../../assets/images/icons/warning.svg";
import "./styles.css";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

export default function TeacherForm() {
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

          <Select name="subject" label="Matéria"
          options={[
            {value: 'Artes', label: 'Artes'},
            {value: 'Geografia', label: 'Geografia'},
            {value: 'Matemática', label: 'Matemática'},
            {value: 'História do Brasil', label: 'História do Brasil'},
            {value: 'Literatura', label: 'Literatura'}
          ]} />
          <Input name="cost" label="Custo da sua aula-hora" />
        </fieldset>
        <fieldset>
          <legend>Horários disponíveis</legend>

          <Input name="weekday" label="Dia da semana" />
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}
