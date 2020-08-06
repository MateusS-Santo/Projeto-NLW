import React from 'react'
import whatsappIcon from '../../assets/image/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEVbDC-6u-Arw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=ajHrQVMhJHwNr6R9-Lqq7wKidIDIWxq4EsovkBI_T2U" alt="Mateus Soares"/>
          <div>
            <strong>
              Mateus Soares
              <span>
                Química
              </span>
            </strong>
          </div>     
        </header> 
        <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />

Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
        <footer>
          <p>
            Preço/hora
            <strong>R$50,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="WhatsApp"/>
            Entrar em contato

          </button>

        </footer>

      </article>
    )
}

export default TeacherItem

