import style from './Servicos.module.css';
import Precos from '../../../assets/Precos';
import Card from '../../Card/Card';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const Servicos = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração padrão da animação
      offset: 50, // offset padrão da animação
    });
  }, []);

  return (
    <div className={style.servicos}>
      <h1>Serviços</h1>
      <hr />
      <div className={style.servicosItem}>
        {Precos.map((item, i) => (
          <Card
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            prices={item.prices}
            dataAos="fade-up"
            dataAosDelay={i * 200}
          />
        ))}
      </div>
      <button data-aos="fade-up" data-aos-delay={Precos.length * 100}>Fazer Agendamento online</button>
    </div>
  );
};

export default Servicos;