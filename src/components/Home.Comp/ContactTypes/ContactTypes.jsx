import style from './ContactTypes.module.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import 'aos/dist/aos.css'; 

const ContactTypes = () => {

  return (
    <section className={style.contactTypes} data-aos="fade-up" data-aos-delay="300">
        <div className={style.addressHeader} >
            <h1>Nossas Redes Sociais</h1>
            <hr />
        </div>
        <section className={style.contactContainer}>
          <div className={`${style.contactIcon} ${style.whatsapp}`}>
            <h2>Entre em contato pelo WhatsApp</h2>
            <a href="https://wa.me/5581985964761" target="_blank" rel="noopener noreferrer"> <FaWhatsapp /> </a>
            <h2>Clique Aqui </h2>
          </div>
          <div className={`${style.contactIcon} ${style.instagram}`}>
            <h2>Veja nosso página no Instagram</h2>
            <a href="https://www.instagram.com/eopedrinho0/" target="_blank" rel="noopener noreferrer"> <FaInstagram /> </a>
            <h2>Clique Aqui </h2>
          </div>
        </section>
    </section>
  )
}

export default ContactTypes;
