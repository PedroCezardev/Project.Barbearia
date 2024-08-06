import style from './Contact.module.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';


const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração padrão da animação
      offset: 50, // offset padrão da animação
    });
  }, []);

  return (
    <div className={style.contact} data-aos="fade-up" data-aos-delay="300">
        <div className={style.contactHeader} data-aos="fade-up" data-aos-delay="300">
            <h1>Formulário de Contato</h1>
            <hr />
        </div>
        <div className={style.contactForm}>
            <input type="text" placeholder='Nome' data-aos="fade-up" data-aos-delay="300" />
            <input type="text" placeholder='E-mail' data-aos="fade-up" data-aos-delay="300" />
            <textarea className={style.contactInput} type="text" placeholder='Mensagem' data-aos="fade-up" data-aos-delay="300" />
            <button data-aos="fade-up" data-aos-delay="300" >Enviar</button>
        </div>
    </div>
  )
}

export default Contact