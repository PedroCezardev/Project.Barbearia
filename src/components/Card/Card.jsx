import style from './Card.module.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div data-aos={props.dataAos} data-aos-delay={props.dataAosDelay} className={style.card}>
      <img src={props.image} alt="" />
      <div className={style.cardGroup}>
        <div className={style.cardHeader}>
          <h2>{props.name}</h2>
          <p>R$ {props.prices}</p>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  prices: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  description: PropTypes.string.isRequired,
  dataAos: PropTypes.string, // Adicione isto
  dataAosDelay: PropTypes.number, // Adicione isto
};

export default Card;
