import './Modal.css';
import Button from './UI/Button';

const Modal = ({ setGameOver }) => {
  const handleGameOver = () => {
    setGameOver(false);
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
