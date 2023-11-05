import './Card.css';
import cardImg from '../assets/card.jpg';

const Card = ({ name, image, onClick, flip, gameOver }) => {
  const activateAnimation = () => (flip ? true : gameOver ? true : false);

  return (
    <div
      role="button"
      className={`card ${activateAnimation() ? 'flip' : ''}`}
      onClick={onClick}
      disabled={flip}
    >
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
