
document.getElementById('my_position').onclick = () => {
  showLoader()
	navigator.geolocation.getCurrentPosition(success, error, {
		enableHighAccuracy : true
	})
}

navigator.geolocation.getCurrentPosition(success, error, {
  		enableHighAccuracy : true
  	})

function success({ coords }) {
  showLoader()
	console.log("Ваше текущее местоположение:", coords);
	const { latitude, longitude } = coords
	const currentPosition = [latitude, longitude]
	getMap(currentPosition, 'You are here')
}

// function error ({ message }) {
// 	console.log('Ошибка получения местоположения:', message);
// }

function error(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Доступ к геолокации запрещен");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Не удалось определить местоположение");
      break;
    case error.TIMEOUT:
      alert("Истекло время ожидания определения местоположения");
      break;
    case error.UNKNOWN_ERROR:
      alert("Неизвестная ошибка");
      break;
  }
}

let map = null
let marker = null



export function getMap(position, tooltip) {  // текущая позиция, сообщение над позицией
	if (map === null) {
		map = L.map('map').setView(position, 15); // setView - масштаб
    
	}


	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  // маркер с сообщением
  L.marker(position).addTo(map).bindPopup(tooltip).openPopup()
  hideLoader()

} 

function showLoader() {
  var loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.display = 'block';
}

function hideLoader() {
  var loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.display = 'none';
}


