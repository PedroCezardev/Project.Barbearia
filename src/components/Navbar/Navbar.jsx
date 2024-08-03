import style from './Navbar.module.css'
import logo_img from '../../assets/Barber Pole.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className={style.navbarLogo}>
            <img src={logo_img} className={style.logo_img} alt="" />
            <h1>Barber Ninja</h1>
        </div>
        <div className={style.navbarLinks}>
          <Link to="agendamentos" smooth={true} duration={500}>Agendamentos</Link>
          <Link to="servicos" smooth={true} duration={500}>Serviços</Link>
          <Link to="about" smooth={true} duration={500}>Sobre</Link>
          <Link to="address" smooth={true} duration={500}>Endereço</Link>
          <Link to="contact" smooth={true} duration={500}>Contato</Link>
        </div>
    </div>
  )
}

export default Navbar