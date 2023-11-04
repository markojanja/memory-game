import './BoxScore.css';

const BoxScore = ({ score, bestScore }) => {
  return (
    <div className="box-score">
      <div className="box-score-content">
        <p>
          Score: {score} / Best score : {bestScore}
        </p>
      </div>
    </div>
  );
};

export default BoxScore;
