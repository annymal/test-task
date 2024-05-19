import { getMap } from './map.js';

export function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
  });

  function success({ coords }) {
    showLoader()
    console.log('Ваше текущее местоположение:', coords);
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

let watchId = null

  function watchLocation() {
    // getMap([0,0])
    if (watchId !== null) {
      console.log('clear')
      navigator.geolocation.clearWatch(watchId)
      watchId = null
    }
       watchId = navigator.geolocation.watchPosition(({coords}) => {
        const { latitude, longitude } = coords;
        const updatePosition = [latitude, longitude];
        console.log(updatePosition)
        getMap(updatePosition, 'Update, You are here');
        console.log('call getMap')
       },
       (error) => {
        console.error('Ошибка получения геолокации:', error)
       },
       {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
      )
     
    }
  }

function showLoader() {
  var loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.display = 'block';
}

