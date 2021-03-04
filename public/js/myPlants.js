/*function Okay(){
	window.location.reload()
}

function bad(){
	var normal = document.getElementById("normal-face");
	var good = document.getElementById('good-face');
	normal.style.visibility= 'hidden';
	good.style.visibility='hidden';}


function good(){
	var normal = document.getElementById("normal-face");
	var bad = document.getElementById('bad-face');
	normal.style.visibility= 'hidden';
	bad.style.visibility='hidden';}

function normal(){
	var bad = document.getElementById("bad-face");
	var good = document.getElementById('good-face');
	bad.style.visibility= 'hidden';
	good.style.visibility='hidden';}*/

var today = new Date().toISOString().split('T')[0];
console.log(today);
document.getElementsByName("date")[0].setAttribute('max', today);

document.getElementsByName("start-date")[0].setAttribute('max', today);




