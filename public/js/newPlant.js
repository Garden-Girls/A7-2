//NOTE: using UTC time and date
var today = new Date().toISOString().split('T')[0];
console.log(today);
document.getElementsByName("date")[0].setAttribute('max', today);




