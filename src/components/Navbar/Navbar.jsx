import style from './Navbar.module.scss';
import logo_img from '../../assets/Barber Pole.svg';
import { Link as ScrollLink } from 'react-scroll';  // Alias para o Link do react-scroll
import { Link as RouterLink } from 'react-router-dom'; 
import { useState, useEffect, useRef } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

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

  // Função para a barra de progresso de scroll
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

  // Criação do menu hambúrguer
  const navRef = useRef(null); // Referência para o nav
  const hamburgerRef = useRef(null); // Referência para o botão hambúrguer

  const handleHamburgerClick = () => {
    if (navRef.current) {
      navRef.current.classList.toggle(style.active); // Usa a classe do módulo CSS
    }
  };

  // Criação de índice de páginas
  const [menu, setMenu] = useState("shop");

  return (
    <div className={`${style.navbar} ${scroll > 0 ? style.navbarScrolled : ''}`}>
      <div className={style.progressBarContainer}>
        <div className={style.progressBar} style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }} />
      </div>
      <div className={style.navbarLogo}>
        <img src={logo_img} className={style.logo_img} alt="Logo" />
        <h1>Barber Ninja</h1>
      </div>
      <div className={style.navbarButtons}>
        <div ref={navRef} className={`${style.navbarLinks} nav`}>
          <li onClick={() => { setMenu("home") }}>
            <RouterLink to='/'>Home</RouterLink> {menu === "home" ? <hr /> : <> </>}
          </li>
          <li onClick={() => { setMenu("agendamento") }}>
            <RouterLink to='/agendamento'>Agendamento</RouterLink> {menu === "agendamento" ? <hr /> : <> </>}
          </li>
          <ScrollLink to="servicos" smooth={true} duration={500}>Ordem Chegada</ScrollLink>
        </div>
        <div className={style.navbarIcon}>
          <a href="/perfil"><FaCircleUser /></a>
        </div>
        <div className={style.darkMode}>
          <button className={style.button} onClick={toggleTheme}>
            {theme === 'light' ?
              <MdLightMode className={style.icon} /> :
              <MdDarkMode className={style.iconActive} />}
          </button>
        </div>
        <button ref={hamburgerRef} onClick={handleHamburgerClick} className={style.navbarHamburguer}></button>
        <div className={style.navLogin}>
          {localStorage.getItem('auth-token')
            ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Sair</button>
            : <RouterLink to="/login"><button>Entrar</button></RouterLink>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
