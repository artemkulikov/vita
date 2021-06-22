
let rangeValue = function() {
	let fader = document.querySelector('input[type="range"]');
	let newValue = fader.value;
	let target = document.querySelector('#calc');
	let age = document.querySelector('#years');
	let feed = document.querySelector('#feedings');
	let water = document.querySelector('#water');
	let spoons = document.querySelector('#spoons');
	let data = [
		['1 неделя', 60, 2, 8, 1],
		['2 недели', 90, 3, 7, 1],
		['3-4 недели', 120, 4, 6, 1],
		['2 месяца', 150, 5, 6, 1],
		['3 месяца', 180, 6, 5, 1],
		['4 месяца', 210, 7, 5, 1],
		['5 месяцев', 210, 7, 4, 1],
		['6 месяцев', 210, 7, 4, 2],
		['7 месяцев', 210, 7, 3, 2],
		['8 месяцев', 210, 7, 3, 2],
		['9 месяцев', 210, 7, 3, 2],
		['10 месяцев', 210, 7, 3, 2],
		['11 месяцев', 210, 7, 3, 2],
		['12 месяцев', 210, 7, 3, 2],
		['14 месяцев', 150, 5, 2, 3],
		['16 месяцев', 180, 6, 2, 3],
		['20 месяцев', 210, 7, 2, 3]
	];
	target.innerHTML = data[newValue][0];
	age.innerHTML = data[newValue][0],
		water.innerHTML = data[newValue][1],
		spoons .innerHTML = data[newValue][2],
		feed.innerHTML = data[newValue][3];
	let vita1 = document.getElementById('vita1');
	let vita2 = document.getElementById('vita2');
	let vita3 = document.getElementById('vita3');
	if(newValue == 1) {
		vita1.style.display = "block";
		vita2.style.display = "none";
		vita3.style.display = "none";
	} else if(newValue == 7) {
		vita1.style.display = "none";
		vita2.style.display = "block";
		vita3.style.display = "none";
	} else if(newValue == 13) {
		vita1.style.display = "none";
		vita2.style.display = "none";
		vita3.style.display = "block";
	}
}
fader.addEventListener("input", rangeValue);