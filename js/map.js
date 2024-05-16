export function getMap(position, tooltip) {
  var map = null; //через let не работает, появляется ошибка
  if (map === null) {
    map = L.map('map').setView(position, 15); // setView - масштаб
  }

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // маркер с сообщением
  L.marker(position).addTo(map).bindPopup(tooltip).openPopup();
  // hideLoader()
}

// function showLoader() {
//   var loaderWrapper = document.getElementById('loader-wrapper');
//   loaderWrapper.style.display = 'block';
// }

// function hideLoader() {
//   var loaderWrapper = document.getElementById('loader-wrapper');
//   loaderWrapper.style.display = 'none';
// }
