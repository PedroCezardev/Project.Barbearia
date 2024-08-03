import style from './Servicos.module.css';
import Precos from '../../../assets/Precos';
import Card from '../../Card/Card';
import { useEffect } from 'react';

const Servicos = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-aos]');
    const isVisible = (elem) => {
      const rect = elem.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const checkVisibility = () => {
      elements.forEach((element) => {
        if (isVisible(element)) {
          const delay = element.getAttribute('data-aos-delay') || 0;
          setTimeout(() => {
            element.classList.add(style.visible);
          }, delay);
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    checkVisibility(); // Check visibility initially

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
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
            data-aos="fade-up"
            data-aos-delay={i * 100}
          />
        ))}
      </div>
      <button>Fazer Agendamento online</button>
    </div>
  );
};

export default Servicos;