import './Card.css';
import cardImg from '../assets/card.jpg';

const Card = ({ name, image, onClick, flip }) => {
  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={onClick}>
      <div className="front">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
      <div className="back">
        <img src={cardImg} alt="backside" />
      </div>
    </div>
  );
};

export default Card;
