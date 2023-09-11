import { useState, useEffect } from 'react';
import './App.css';
import dataFetcher from './utils/dataFetcher';
import shuffleData from './utils/shuffleData';
import Card from './components/Card';
import BoxScore from './components/BoxScore';

function App() {
  const [heroesData, setHeroesData] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [flip, setFlip] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const data = await dataFetcher();
        setHeroesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, []);

  function handleClick(hero) {
    setFlip(true);
    setClicked([...clicked, hero.name]);
    setScore(score + 1);
    if (score >= bestScore && !clicked.includes(hero.name)) {
      setBestScore(bestScore + 1);
    }

    setTimeout(() => {
      const shuffledData = shuffleData([...heroesData]);
      setHeroesData(shuffledData);
    }, 800);

    setTimeout(() => {
      setFlip(false);
    }, 1500);

    if (clicked.includes(hero.name)) {
      console.log('gameOver');
      setClicked([]);
      setScore(0);
    }
  }

  return (
    <>
      <BoxScore score={score} bestScore={bestScore} />
      <div id="app">
        {heroesData.map((hero) => (
          <Card
            key={hero.id}
            name={hero.name}
            image={hero.img}
            onClick={() => handleClick(hero)}
            flip={flip}
          />
        ))}
      </div>
    </>
  );
}

export default App;
