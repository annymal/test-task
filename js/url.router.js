
import { toggleDropdown } from './index.js';
import { getLocation } from './location.js';
import { getTime } from './timer.js';

document.addEventListener('click', (e) => {
  const { target } = e;
  if (!target.matches('nav a')) {
    //при нажатии на иконку не работает
    return;
  }
  e.preventDefault();
  e.target.classList.add('active');
  urlRoute();
});

const urlRoutes = {
  404: '/pages/404.html',
  '/': '/pages/index.html',
  '/map': '/pages//map.html',
  '/time': '/pages//time.html',
  '/resume': '/pages/resume.html',
};

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  const location = window.location.pathname;
  const route = urlRoutes[location] || urlRoutes[404];
  const html = await fetch(route).then((response) => response.text());
  document.getElementById('content').innerHTML = html;

  if (location.length == 0) {
    location = '/';
    
  }
  if (location === '/map') {
    getLocation();
  }
  if (location === '/time') {
    getTime();
  }
  if (location == '/') {
    toggleDropdown()  
  }
};

window.onpopstate = urlLocationHandler; //когда пользователь переходит по истории браузера
window.route = urlRoute;
urlLocationHandler();

