export function getTime() {
  let startTime = localStorage.getItem('startTime');
  if (!startTime) {
    startTime = new Date().getTime();
    localStorage.setItem('startTime', startTime);
  }

  function updateTimer() {
    const location = window.location.pathname;
    if (location !== '/time') {
      clearInterval(interval);
    }

    const elapsedTime = new Date().getTime() - parseInt(startTime); // время, прошедшее с начала сеанса
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  const interval = setInterval(updateTimer, 1000);

  window.addEventListener('beforeunload', () => {
    // Сбрасывается время начала сеанса при закрытии вкладки
    localStorage.removeItem('startTime');
  });
}
