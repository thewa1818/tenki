
//上いらない

// const weatherNum = 3;

// const fetchW = async () =>{
//   for(let i =1; i <= weatherNum; i++){
//     await getW(i);
//   }
// };


const getW = async (id) =>{
  const url = `https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo`;
  const res = await fetch(url);
  const weather = await res .json();
  console.log(weather);
  createW(weather);
}


function createW(weather){
  const tenki = `
  <div>エリア${weather.timezone}</div>
   <div>最高気温${weather.daily.temperature_2m_max}</div>
   <div>標高${weather.elevation}</div>
  `

  $(".list").append(tenki);
};

getW();

//こんなやり方もあった

// const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo';


// fetch(url)
//   .then(data => data.json())
//   .then(json => console.log(json))




