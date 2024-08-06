import style from './Carousel.module.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import image_1 from '../../../assets/iconlike.png';
import image_2 from '../../../assets/justiceicon.png';
import image_3 from '../../../assets/negocioicon.png';
import image_4 from '../../../assets/Seloicon.png';
import image_5 from '../../../assets/upicon.png';
import image_6 from '../../../assets/thebesticon.png';

const Carousel = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 50, 
        });
    
        /*if (carouselLogosRef.current && carouselSlideRef.current) {
            const copy = carouselSlideRef.current.cloneNode(true);
            carouselLogosRef.current.appendChild(copy);
          }*/
      }, []);

    //var copy = document.querySelector(".carouselLogosSlide").cloneNode(true);
    //document.querySelector(".carouselLogos").appendChild(copy);

  return (
    <div className={style.carousel} data-aos="fade-up" data-aos-delay="300">
       <div className={style.carouselLogos} /*ref={carouselLogosRef}*/>
        <div className={style.carouselLogosSlide} /*ref={carouselSlideRef}*/>
                <img src={image_1} alt="" />
                <img src={image_2} alt="" />
                <img src={image_3} alt="" />
                <img src={image_4} alt="" />
                <img src={image_5} alt="" />
                <img src={image_6} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Carousel