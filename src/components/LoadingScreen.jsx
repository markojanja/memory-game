import './LoadingScreen.css';
import spinner from '../assets/spinner.svg';

const LoadingScreen = () => {
  return (
    <div className="load-scr">
      <img src={spinner} alt="loading" />
      <h2>Loading</h2>
    </div>
  );
};

export default LoadingScreen;
