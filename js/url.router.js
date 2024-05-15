import { getLocation } from './location.js';
import { getTime } from './timer.js';
//не может найти без .js

document.addEventListener('click', (e) => {
  const { target } = e;
  if (!target.matches('nav a')) {
    //при нажатии на иконку не работает
    return;
  }
  e.preventDefault();
  urlRoute();
});

const urlRoutes = {
  404: '/pages/404.html',
  '/': '/pages/index.html',
  '/map': '/pages//map.html',
  '/time': '/pages//time.html',
};

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  console.log(event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = '/';
  }
  if (location === '/map') {
    getLocation();
  }
  if (location === '/time') {
    // getTime();
  }
  const route = urlRoutes[location] || urlRoutes[404];
  const html = await fetch(route).then((response) => response.text());
  document.getElementById('content').innerHTML = html;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const timer = doc.getElementById('timer'); //получила здесь таймер
  console.log(timer);
  if (timer) {
    getTime(timer);
  }
};

window.onpopstate = urlLocationHandler; //когда пользователь переходит по истории браузера
window.route = urlRoute;
urlLocationHandler();
