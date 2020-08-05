import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

export default function TeacherItem() {
    return (
        <div>
            <article className="teacher-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/30822825?s=460&u=81cc0e0a001257279cada327bc4aeadd4bd08777&v=4" alt="" />
                    <div>
                        <strong>Nome</strong>
                        <span>Matéria</span></div>
                </header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                <footer>
                    <p>
                        Preço/hora
                            <strong>R$50,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                </button>
                </footer>
            </article>
        </div>
    )
}
