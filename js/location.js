import { getMap } from './map.js';

export function getLocation() {
  // document.getElementById('my_position').onclick = () => {
  //   // showLoader()

  // 	navigator.geolocation.getCurrentPosition(success, error, {
  // 		enableHighAccuracy : true
  // 	})
  // }

  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
  });

  function success({ coords }) {
    // showLoader()
    console.log('Ваше текущее местоположение:', coords);
    const { latitude, longitude } = coords;
    const currentPosition = [latitude, longitude];
    getMap(currentPosition, 'You are here');
    // setTimeout(() => getMap(currentPosition, 'You are here'), 30) //потом убрать settimeout
  }

  function error({ message }) {
    console.log('Ошибка получения местоположения:', message);
  }
}
