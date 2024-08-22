import style from './Hero.module.css';
import Image1 from '../../../assets/gallery_img.svg';
import Image2 from '../../../assets/hero_img.svg';
import Image3 from '../../../assets/corte_simple.svg';
import Slider from "react-slick";

const Hero = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
};

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Melhores Experiências",
        title: "Cortes",
        title2: "Desfaçados",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Melhores Preços",
        title: "Preço",
        title2: "Acessível",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Melhores Promoções",
        title: "Melhores Descontos",
        title2: "Ótimas Ofertas",
    }
   
]

  return (
    <div className={style.container}>
            <div className={style.heroContainer}>
                <div className={style.heroContent}>
                    <Slider {...settings}> 
                        {HeroData.map((data) => (
                            <div key={data.id} className={style.heroSlide} style={{ backgroundImage: `url(${data.img})` }}>
                                <div className={style.heroOverlay}>
                                    <div className={style.heroText}>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className={style.heroSubtitle}>
                                            {data.subtitle}
                                        </h1>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className={style.heroTitle}>
                                            {data.title}
                                        </h1>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className={style.heroTitle2}>
                                            {data.title2}
                                        </h1>
                                        <div data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
                                            <button data-aos="fade-up" data-aos-delay="300" className={style.navbarButton}>Fazer Agendamento online</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
  )
}

export default Hero