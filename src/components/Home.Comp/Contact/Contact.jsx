import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.contact}>
        <div className={style.contactHeader}>
            <h1>Formulário de Contato</h1>
            <hr />
        </div>
        <div className={style.contactForm}>
            <input type="text" placeholder='Nome' />
            <input type="text" placeholder='E-mail' />
            <textarea className={style.contactInput} type="text" placeholder='Mensagem' />
            <button>Enviar</button>
        </div>
    </div>
  )
}

export default Contact