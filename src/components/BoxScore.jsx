import './BoxScore.css';

const BoxScore = ({ score, bestScore }) => {
  return (
    <div className="box-score">
      <p>score</p>
      <p>
        {score}/{bestScore}
      </p>
    </div>
  );
};

export default BoxScore;
