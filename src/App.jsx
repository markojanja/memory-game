import { useState, useEffect } from 'react';
import './App.css';
import dataFetcher from './utils/dataFetcher';
import shuffleData from './utils/shuffleData';
import Card from './components/Card';
import BoxScore from './components/BoxScore';
import LoadingScreen from './components/LoadingScreen';
import Modal from './components/Modal';

function App() {
  const [heroesData, setHeroesData] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [flip, setFlip] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await dataFetcher();
        setHeroesData(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  function handleClick(hero) {
    setClicked([...clicked, hero.name]);
    setScore(score + 1);

    setTimeout(() => {
      const shuffledData = shuffleData([...heroesData]);
      setHeroesData(shuffledData);
    }, 800);

    if (clicked.includes(hero.name)) {
      setGameOver(true);
      setFlip(true);
      setClicked([]);
      setScore(0);
    }
    if (score >= bestScore && !clicked.includes(hero.name)) {
      setBestScore(bestScore + 1);
    }

    flipAnimation();
  }

  const flipAnimation = () => {
    setFlip(true);
    setTimeout(() => {
      setFlip(false);
    }, 1000);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      {gameOver && <Modal setGameOver={setGameOver} setFlip={setFlip} />}
      <BoxScore score={score} bestScore={bestScore} />
      <div id="app">
        {heroesData.map((hero) => (
          <Card
            key={hero.id}
            name={hero.name}
            image={hero.img}
            onClick={() => handleClick(hero)}
            flip={flip}
            gameOver={gameOver}
          />
        ))}
      </div>
    </>
  );
}

export default App;
