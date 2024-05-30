import { getMap } from './map.js';

export function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
  });

  function success({ coords }) {
    showLoader()
    const { latitude, longitude } = coords;
    const currentPosition = [latitude, longitude];
    // getMap(currentPosition, 'You are here');
    setTimeout(() => getMap(currentPosition, 'You are here'), 300) // сделала специально setTimeout,чтобы отображался preloader
  }

  function error({ message }) {
    console.log('Ошибка получения местоположения:', message);
  }

  
  const btn = document.getElementById('my_position')
  btn.addEventListener('click', () => {
    watchLocation()
})
 
}

function showLoader() {
  var loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.display = 'block';
}

