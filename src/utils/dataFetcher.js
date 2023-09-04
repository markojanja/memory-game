const token = '10220203370170847';
const baseUrl = `https://superheroapi.com/api.php/${token}/search/`;

async function dataFetcher() {
  const heroes = [
    'ghost rider',
    'blade',
    'iron Man',
    'spider-Man',
    'loki',
    'thanos',
    'captain america',
    'black Widow',
    'hulk',
    'black panther',
    'deadpool',
    'wonder woman',
    'aquaman',
    'superman',
    'batman',
    // 'thor',
    // 'venom',
    // 'Darkseid',
    // 'deathstroke',
    // 'harley quinn',
  ];
  const dataList = [];
  await Promise.all(
    heroes.map(async (hero) => {
      const url = `${baseUrl}${hero.trim()}`;
      const results = await fetch(url);
      const data = await results.json();
      let modData;
      if (
        hero === 'thor' ||
        hero === 'batman' ||
        hero === 'superman' ||
        hero === 'venom'
      ) {
        modData = data.results[1];
      } else {
        modData = data.results[0];
      }
      dataList.push({
        id: modData.id,
        name: modData.name,
        img: modData.image.url,
      });
    }),
  );
  return dataList;
}

export default dataFetcher;
