import style from './Carousel.module.css';
import image_1 from '../../../assets/iconlike.png';
import image_4 from '../../../assets/Seloicon.png';
import image_5 from '../../../assets/upicon.png';
import image_6 from '../../../assets/thebesticon.png';

const logos = [
  image_1,
  image_4,
  image_5,
  image_6
];

const Carousel = () => {
  return (
    <div className={style.logos} data-aos="fade-up" data-aos-delay="300">
      <div className={style.logosSlide}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
      <div className={style.logosSlide}>
        {logos.map((logo, index) => (
          <img key={index + logos.length} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
