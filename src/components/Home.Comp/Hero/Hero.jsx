import style from './Hero.module.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração padrão da animação
      offset: 50, // offset padrão da animação
    });
  }, []);

  return (
    <div className={style.hero}>
        <div className={style.heroDescription}>
            <h1 data-aos="fade-up" data-aos-delay="100">BARBEARIA NINJA</h1>
            <p data-aos="fade-up" data-aos-delay="300">
                Explore a arte da barbearia na Barbearia Ninja, onde tradição encontra estilo moderno. 
                Nossos barbeiros especializados oferecem cortes clássicos e tendências contemporâneas, 
                garantindo uma experiência única em cuidados masculinos.
            </p>
            <button data-aos="fade-up" data-aos-delay="400" className={style.navbarButton}>Fazer Agendamento online</button>
        </div>
    </div>
  )
}

export default Hero