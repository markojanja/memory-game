const token = '10220203370170847';
const baseUrl = `https://superheroapi.com/api.php/${token}/search/`;

const dataFetcher = async () => {
  const heroes = [
    'thor',
    'iron Man',
    'spider-Man',
    'loki',
    'venom',
    'captain america',
    'hulk',
    'black panther',
    'deadpool',
    'aquaman',
    'superman',
    'batman',
  ];
  const heroesList = [];
  await Promise.all(
    heroes.map(async (hero) => {
      const url = `${baseUrl}${hero.trim()}`;
      const results = await fetch(url);
      const data = await results.json();
      let modifiedData;
      if (
        hero === 'thor' ||
        hero === 'batman' ||
        hero === 'superman' ||
        hero === 'venom'
      ) {
        modifiedData = data.results[1];
      } else {
        modifiedData = data.results[0];
      }
      heroesList.push({
        id: modifiedData.id,
        name: modifiedData.name,
        img: modifiedData.image.url,
      });
    }),
  );
  return heroesList;
};

export default dataFetcher;
