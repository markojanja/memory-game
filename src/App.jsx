import { useState, useEffect } from 'react';
import './App.css';
import dataFetcher from './utils/dataFetcher';
import shuffleData from './utils/shuffleData';
import Card from './components/Card';

function App() {
  const [heroesData, setHeroesData] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [flip, setFlip] = useState(false);

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
    }
  }

  return (
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
  );
}

export default App;
