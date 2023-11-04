import './Modal.css';
import Button from './UI/Button';

const Modal = ({ setGameOver, setFlip }) => {
  const handleGameOver = () => {
    setGameOver(false);
    setFlip(false);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Game Over</h2>
        <Button text="restart" onClick={handleGameOver} />
      </div>
    </div>
  );
};

export default Modal;
