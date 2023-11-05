import './LoadingScreen.css';
import spinner from '../assets/spinner.svg';

const LoadingScreen = () => {
  return (
    <div className="load-scr">
      <h1>Hero Card Game</h1>
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default LoadingScreen;
