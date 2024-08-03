import style from './Footer.module.css';
import logo_img from '../../assets/Barber Pole.svg';
import { FaInstagram, FaLocationArrow, FaMobileAlt, FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footerHeader}>
            <h1>Social e Contatos</h1>
            <hr />
        </div>
        <div className={style.footerLogo}>
            <img src={logo_img} alt="" />
            <h2>Barber Ninja</h2>
        </div>
        <div className={style.footerLinks}>
          <Link to="agendamentos" smooth={true} duration={500}>Agendamentos</Link>
          <Link to="servicos" smooth={true} duration={500}>Serviços</Link>
          <Link to="about" smooth={true} duration={500}>Sobre</Link>
          <Link to="address" smooth={true} duration={500}>Endereço</Link>
          <Link to="contact" smooth={true} duration={500}>Contato</Link>
        </div>
        <div className={style.footerContact}>
            <FaMobileAlt />
            <p>(81) 99999-9999 (Unidade 1 - Monte)</p>
            <p>(81) 99999-9999 (Unidade 2 - Nobre)</p>
        </div>
        <div className={style.footerIcons}>
           <Link> <FaInstagram /> </Link>
           <Link> <FaWhatsapp /> </Link>
           <Link> <FaLinkedinIn /> </Link>
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