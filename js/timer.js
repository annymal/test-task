
 export function getTime(timer) {
 let startTime = localStorage.getItem('startTime');
 if (!startTime) {
	 startTime = new Date().getTime();
	 localStorage.setItem('startTime', startTime);
 }

 function updateTimer() {
	console.log(timer.textContent)
	 const elapsedTime = new Date().getTime() - parseInt(startTime); // время, прошедшее с начала сеанса
	 const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
	 const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
	 const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

	 // отображение на странице
	 timer.textContent = '10 02 28'; //не выводится
	//  document.getElementById("timer").textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
 }
 setInterval(updateTimer, 1000);

 window.addEventListener('beforeunload', () => { // Сбрасывается время начала сеанса при закрытии вкладки
	 localStorage.removeItem('startTime');
 })
}