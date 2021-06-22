// burger menu
$(document).ready(function() {
	$('.menu__icon').click(function(event) {
		$('.menu__icon, .nav').toggleClass('active');
		$('main').toggleClass('lock');
	});
});
$(document).ready(function() {
	$('.nav__item-link').click(function() {
		$('.menu__icon, .nav').removeClass('active');
		$('main').removeClass('lock');
	});
});
const menu = $('.menu__icon, .nav'),
	main = $('main');
$(document).click(function(e) {
	if(!menu.is(e.target) && menu.has(e.target).length === 0) {
		menu.removeClass('active');
		main.removeClass('lock');
	};
});
// scroll menu hide
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function() {
	newscroll = mywindow.scrollTop();
	if(newscroll > mypos && !up) {
		$('.nav').stop().slideToggle();
		up = !up;
		console.log(up);
	} else if(newscroll < mypos && up) {
		$('.nav').stop().slideToggle();
		up = !up;
	}
	mypos = newscroll;
});
// scroll menu hide
//smooth scroll
$('.nav .nav__item-link, .header__logo-link').on('click', function() {
	let href = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 450,
		easing: "swing"
	});
	return false;
});
//smooth scroll end
// burger menu end
//table
$(document).ready(function() {
	$('#about1').click(function(event) {
		$('.table1').addClass('opened');
		$('.table2, .table3').removeClass('opened');
		$(".card__wrapper.blue").css("background-color", "#00acc4");
		$(".card__wrapper.pink, .card__wrapper.green").css("background-color", "");
		$(".card__btn.blue").css("border", "2px dashed #fff");
		$(".card__btn.blue").css("color", "#fff");
		$(".card__btn.blue").css("background-color", "#00acc4");
		$(".card__btn.pink, .card__btn.green").css("border", "");
		$(".card__btn.pink, .card__btn.green").css("color", "");
	});
});
$(document).ready(function() {
	$('#about2').click(function() {
		$('.table2').addClass('opened');
		$('.table1').addClass('closed');
		$('.table1, .table3').removeClass('opened');
		$(".card__wrapper.pink").css("background-color", "#ca94b3");
		$(".card__wrapper.green").css("background-color", "");
		$(".card__btn.pink").css("border", "2px dashed #fff");
		$(".card__btn.pink").css("color", "#fff");
		$(".card__btn.green").css("border", "");
		$(".card__btn.green").css("color", "");
		$(".card__wrapper.blue").css("background-color", "#fff");
		$(".card__btn.blue").css("background-color", "#fff");
		$(".card__btn.blue").css("color", "#0071A2");
		$(".card__btn.blue").css("border-color", "#0071A2");
	});
});
$(document).ready(function() {
	$('#about3').click(function() {
		$('.table3').addClass('opened');
		$('.table1, .table2').addClass('closed');
		$('.table1, .table2').removeClass('opened');
		$(".card__wrapper.green").css("background-color", "#45a880");
		$(".card__wrapper.blue, .card__wrapper.pink").css("background-color", "");
		$(".card__btn.green").css("border", "2px dashed #fff");
		$(".card__btn.green").css("color", "#fff");
		$(".card__btn.pink").css("border", "");
		$(".card__btn.pink").css("color", "");
		$(".card__wrapper.blue").css("background-color", "#fff");
		$(".card__btn.blue").css("background-color", "#fff");
		$(".card__btn.blue").css("color", "#0071A2");
		$(".card__btn.blue").css("border-color", "#0071A2");
	});
});
//table end

// видео
function findVideos() {
	let videos = document.querySelectorAll('.video');
	for(let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let media = video.querySelector('.video__media');
	let button = video.querySelector('.video__button');
	let id = parseMediaURL(media);
	video.addEventListener('click', () => {
		let iframe = createIframe(id);
		link.remove();
		button.remove();
		video.appendChild(iframe);
	});
	link.removeAttribute('href');
	video.classList.add('video--enabled');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);
	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');
	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');
	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';
	return 'https://www.youtube.com/embed/' + id + query;
}
findVideos();
// видео