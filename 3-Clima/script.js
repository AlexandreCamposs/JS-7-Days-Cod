document.querySelector('.busca').addEventListener('submit', async (event) => {
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;
  console.log(input);
  if (input !== '') {
    showWarning('Carregando...');

    let url = `https://api.openweathermap.org/data/2.5/weather?q=
    ${encodeURI(input,)}&units=metric&lang=pt_br&appid=d06cdb298fafc83c520d5ab677fc477e`;
    // 1c6e88203620fe1addee4db0eb546662

    let results = await fetch(url);
    console.log(url)
    let json = await results.json();
    console.log(json);
    if (json.cod === 200) {
      showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windAngle: json.wind.deg,
      });
    } else {
      showWarning('Não encontramos esta localização');
    }
  }
});

function showInfo(json) {
  showWarning('');

  document.querySelector('.resultado').style.display = 'block';
  document.querySelector('.titulo').innerHTML = `${json.name}`;
}

function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
}
