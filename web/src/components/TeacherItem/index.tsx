import React from 'react'
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"
import './styles.css'

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/30822825?s=460&u=81cc0e0a001257279cada327bc4aeadd4bd08777&v=4"
            alt="Foto"
          />
          <div>
            <strong>Nome do professor</strong>
            <span>Matérias</span>
          </div>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          aliquam, repellat, nesciunt mollitia perspiciatis culpa explicabo
          sapiente nihil neque facilis aut aperiam quis ex, totam odit
          adipisci illo atque? Ab?
        </p>
        <footer>
          <p>
            Preço/hora
            <strong>R$ 20,00</strong>
          </p>
          <button>
            <img src={whatsappIcon} alt="" />
            Entrar em contato
          </button>
        </footer>
      </article>
    )
}

export default TeacherItem
