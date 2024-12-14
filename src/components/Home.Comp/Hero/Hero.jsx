import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import style from './Hero.module.css';
import Image1 from '../../../assets/gallery_img.svg';
import Image2 from '../../../assets/hero_img.svg';
import Image3 from '../../../assets/corte_simple.svg';

const Hero = () => {
    const HeroData = [
        {
            id: 1,
            img: Image1,
            subtitle: "Melhores Experiências",
            title: "Cortes",
            title2: "Disfarçados",
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
    ];

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 50, 
        });
      }, []);

    return (
        <div className={style.container}>
            <div className={style.heroContainer}>
                <Swiper
                    modules={[ Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className={style.content}
                >
                    {HeroData.map((data) => (
                        <SwiperSlide key={data.id} className={style.heroSlide} style={{ backgroundImage: `url(${data.img})` }}>
                            <div className={style.heroOverlay}>
                                <div className={style.heroText}>
                                    <h1 data-aos="fade-up" data-aos-delay="200" className={style.subtitle}>
                                        {data.subtitle}
                                    </h1>
                                    <h1 data-aos="fade-up" data-aos-delay="300" className={style.mainTitle}>
                                        {data.title}
                                    </h1>
                                    <h1 data-aos="fade-up" data-aos-delay="400" className={style.headline}>
                                        {data.title2}
                                    </h1>
                                    <div data-aos="fade-up" data-aos-delay="500" >
                                        <button  className={style.navbarButton}>Fazer Agendamento online</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Hero;
