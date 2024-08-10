import style from './Navbar.module.css'
import logo_img from '../../assets/Barber Pole.svg';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {

  // Função para obter o tema do localStorage ou usar o tema padrão 'light'
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  };

  // Estado do tema
  const [theme, setTheme] = useState(getInitialTheme);

  // Efeito para aplicar o tema ao carregar o componente
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // função para scroll bar
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScroll(scroll);
    }
    window.addEventListener("scroll", progressBarHandler);
    return () => window.removeEventListener("scroll", progressBarHandler);
  }, []);

   // criando menu hamburguer
    const navRef = useRef(null); // Referência para o nav
    const hamburgerRef = useRef(null); // Referência para o botão hambúrguer
  
    const handleHamburgerClick = () => {
      if (navRef.current) {
        navRef.current.classList.toggle(style.active); // Usa a classe do módulo CSS
      }
    };
  
  return (
    <div className={style.navbar}>
        <div className={style.navbarLogo}>
            <img src={logo_img} className={style.logo_img} alt="" />
            <h1>Barber Ninja</h1>
        </div>
        <div ref={navRef} className={`${style.navbarLinks} nav`}>
          <Link to="agendamentos" smooth={true} duration={500}>Agendamentos</Link>
          <Link to="servicos" smooth={true} duration={500}>Serviços</Link>
          <Link to="about" smooth={true} duration={500}>Sobre</Link>
          <Link to="address" smooth={true} duration={500}>Endereço</Link>
          <Link to="contact" smooth={true} duration={500}>Contato</Link>
        </div>
        <div className={style.navbarButtons}>
          <div className={style.darkMode}>
            <button className={style.button} onClick={toggleTheme} >
              {theme === 'light' ?
                <MdLightMode className={style.icon} /> :
                <MdDarkMode className={style.iconActive} /> }
            </button>
          </div>
          <button ref={hamburgerRef} onClick={handleHamburgerClick} className={style.navbarHamburguer}></button>
        </div>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar} style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }} />
        </div>
    </div>
  )
}

export default Navbar