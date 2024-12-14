import style from './Address.module.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const Address = () => {

    const EnderecoData = [
        {
            id: 1,
            Unidade: "Unidade 1 - Monte",
            Endereco: "R. Dom Miguel de Lima Valverde",
            mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.917061739411!2d-34.858558422025986!3d-8.007489871439011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab22adb63dc139%3A0xd27117e5d0b1cbc2!2sR.%20Dom%20Miguel%20de%20Lima%20Valverde%2C%2044-106%20-%20Monte%2C%20Olinda%20-%20PE%2C%2053240-210!5e0!3m2!1spt-BR!2sbr!4v1724281992567!5m2!1spt-BR!2sbr"
        },
        {
            id: 2,
            Unidade: "Unidade 2 - Nobre",
            Endereco: "Travessa Rio Solimões, N 12 - Paulista",
            mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5896201906203!2d-34.87182662418252!3d-7.937855979060347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab161b4a5b3a67%3A0x1060bedb33646842!2sR.%20Rio%20Solim%C3%B5es%2C%2012%20-%20Nobre%2C%20Paulista%20-%20PE%2C%2053401-700!5e0!3m2!1spt-BR!2sbr!4v1724281291595!5m2!1spt-BR!2sbr"
        },
    ];

    useEffect(() => {
        AOS.init({
          duration: 1000, // duração padrão da animação
          offset: 50, // offset padrão da animação
        });
    }, []);

    return (
        <div className={style.address}>
            <div className={style.addressHeader} data-aos="fade-up" data-aos-delay="300">
                <h1>Nossas Unidades</h1>
                <hr />
            </div>
            <div className={style.addressItem}>
                { EnderecoData.map((item, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 200}>
                        <iframe
                            className={style.addressMaps}
                            src={item.mapaUrl}
                            width="450"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Mapa da ${item.Unidade}`}
                        ></iframe>
                        <h2>{item.Unidade}</h2>
                        <p>{item.Endereco}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Address;
