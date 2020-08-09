import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Select from '../../components/Select/index.tsx'

export default function TeacherForm() {
    return (<>
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que íncrivel que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário de inscrição" />
        </div>
        <main>
            <fieldset>
                <legend>Seus dados</legend>

                <Input name="name" label="Nome Completo" />
                <Input name="avatar" label="Avatar" />
                <Input name="whatsapp" label="WhatsApp" />
            </fieldset>

            <fieldset>
                <legend>Seus dados</legend>

                <Select
                    name="subject"
                    label="Matéria"
                    options={[
                        { value: 'Artes', label: 'Artes' },
                        { value: 'Biologia', label: 'Biologia' },
                        { value: 'Ciências', label: 'Ciências' },
                        { value: 'Educação Física', label: 'Educação Física' },
                        { value: 'Física', label: 'Física' },
                        { value: 'Geografia', label: 'Geografia' },
                        { value: 'Química', label: 'Química' },
                        { value: 'História', label: 'História' },
                        { value: 'Matemática', label: 'Matemática' },
                        { value: 'Português', label: 'Português' },
                        { value: 'Inglês', label: 'Inglês' },
                    ]}
                />
                <Input name="cost" label="Custo da sua hora-aula" />>
            </fieldset>

            <footer>
                <img src={warningIcon} alt="Aviso importante" />
                <p>
                    Importante! <br />
                        Preencha todos os dados
                    </p>

                <button type="button">Salvar cadastro</button>
            </footer>
        </main>
    </>
    )
}
