import style from './Hero.module.css';

const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.heroDescription}>
            <h1>BARBEARIA NINJA</h1>
            <p>
                Explore a arte da barbearia na Barbearia Ninja, onde tradição encontra estilo moderno. 
                Nossos barbeiros especializados oferecem cortes clássicos e tendências contemporâneas, 
                garantindo uma experiência única em cuidados masculinos.
            </p>
            <button className={style.navbarButton}>Fazer Agendamento online</button>
        </div>
    </div>
  )
}

export default Hero