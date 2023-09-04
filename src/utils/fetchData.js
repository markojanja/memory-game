async function fetchData(setHeroesData) {
  try {
    const data = await dataFetcher();
    setHeroesData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default fetchData;
