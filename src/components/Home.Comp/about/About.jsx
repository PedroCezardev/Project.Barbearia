import style from './About.module.css';
import Slider from "react-slick";
import image_1 from '../../../assets/gallery_img.svg';
import image_2 from '../../../assets/hero_img.svg';
import image_3 from '../../../assets/corte_simple.svg';

const About = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    const GalleryData = [
        { id: 1, image: image_1 },
        { id: 2, image: image_2 },
        { id: 3, image: image_3 },
    ];

  return (
    <div className={style.about}>
        <div className={style.aboutDescription}>
            <div className={style.aboutHeader}>
                <h1>Sobre</h1>
                <hr />
            </div>
            <p>
                Bem-vindo ao nosso espaço dedicado à arte da barbearia. Na Barbearia Ninja, combinamos tradição e 
                estilo contemporâneo para oferecer uma experiência única de cuidados masculinos. Desde cortes clássicos 
                a tendências modernas, nossos barbeiros especializados estão aqui para criar o visual perfeito para você. 
                Explore nossos serviços, conheça nossa equipe e agende sua visita para descobrir por que somos mais do que 
                uma barbearia - somos um destino para homens que valorizam qualidade, precisão e estilo.
            </p>
        </div>
        <div className={style.aboutGallery}>
            <div className={style.aboutHeader}>
                <h1>Galeria</h1>
                <hr />
            </div>
            {/*<Slider { ... settings}>
                { GalleryData.map((data, i) => (
                    <img className={style.aboutGalleryImg} key={i} src={data.image} alt={`Galeria imagem ${data.id}`} />
                ))}
            </Slider>*/}
        </div>
    </div>
  )
}

export default About