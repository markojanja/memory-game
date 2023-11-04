import './Button.css';

const Button = ({ text, onClick }) => {
  return (
    <button className="restart-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
