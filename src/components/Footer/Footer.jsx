import style from './Footer.module.css';
import logo_img from '../../assets/Barber Pole.svg';
import { FaInstagram, FaLocationArrow, FaMobileAlt, FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css'; 

const Footer = () => {

  

  return (
    <div className={style.footer}>
        <div className={style.footerLogo}>
            <img src={logo_img} alt="" />
            <h2>Barber Ninja</h2>
        </div>
        <div className={style.footerLinks}>
          <Link to="agendamentos">Agendamentos</Link>
          <Link to="servicos" >Serviços</Link>
          <Link to="about" >Sobre</Link>
          <Link to="address" >Endereço</Link>
          <Link to="contact" >Contato</Link>
        </div>
        <div className={style.footerContact}>
            <FaMobileAlt />
            <p>(81) 99999-9999 (Unidade 1 - Monte)</p>
            <p>(81) 99999-9999 (Unidade 2 - Nobre)</p>
        </div>
        <div className={style.footerIcons}>
          <a href="https://www.instagram.com/eopedrinho0/" target="_blank" rel="noopener noreferrer"> <FaInstagram /> </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"> <FaWhatsapp /> </a>
          <a href="https://www.linkedin.com/in/pedro-cezar-77a444270/" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn /> </a>
        </div>
        <div className={style.footerEmail}>
            <FaLocationArrow />
            <p>ninjabarber@gmail.com</p>
        </div>
        <div className={style.footerCopyright}>
            <hr />
            <p>Copyright @ 2024 - Pedro Cezar e Mariana Oliveira</p>
        </div>
    </div>
  )
}

export default Footer