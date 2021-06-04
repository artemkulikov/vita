// burger menu

$(document).ready(function(){
    $('.menu__icon').click(function(event){
        $('.menu__icon, .nav').toggleClass('active');
        $('main').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.nav__item-link').click(function() {
      $('.menu__icon, .nav').removeClass('active');
      $('main').removeClass('lock');
    });
});

const menu    = $('.menu__icon, .nav'),
      main    = $('main');

$(document).click(function (e) {
  if ( !menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.removeClass('active');
      main.removeClass('lock');
  };
});


// scroll menu hide

var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
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

$(document).ready(function(){
  $('#about1').click(function(event){
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

$(document).ready(function(){
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

$(document).ready(function(){
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

// калькулятор

let rangeValue = function(){
  let fader = document.querySelector('input[type="range"]');
  let newValue = fader.value;  
  let target = document.querySelector('#calc');
  let age = document.querySelector('#years');
  let feed = document.querySelector('#feedings');
  let water = document.querySelector('#water');
  let spoons = document.querySelector('#spoons');
  let data = [
    ['1 тиждень',60,2,8,1],
    ['2 тиждень',90,3,7,1],
    ['3-4 тиждень',120,4,6,1],
    ['2 місяці',150,5,6,1],
    ['3 місяці',180,6,5,1],
    ['4 місяці',210,7,5,1],
    ['5 місяці',210,7,4,1],
    ['6 місяці',210,7,4,2],
    ['7 місяць' ,210,7,3,2],
    ['8 місяць' ,210,7,3,2],
    ['9 місяць',210,7,3,2],
    ['10 місяців',210,7,3,2],
    ['11 місяців',210,7,3,2],
    ['12 місяців',210,7,3,2],
    ['14 місяців',150,5,2,3],
    ['16 місяців',180,6,2,3],
    ['20 місяців',210,7,2,3]
];

target.innerHTML = data[newValue][0];

age.innerHTML = data[newValue][0],
water.innerHTML = data[newValue][1],
spoons.innerHTML = data[newValue][2],
feed.innerHTML = data[newValue][3];

let vita1 = document.getElementById('vita1');
let vita2 = document.getElementById('vita2');
let vita3 = document.getElementById('vita3');

  if(newValue == 1){
    vita1.style.display = "block";
    vita2.style.display = "none";
    vita3.style.display = "none";

  }  else if(newValue == 7){

    vita1.style.display = "none";
    vita2.style.display = "block";
    vita3.style.display = "none";

  } else if(newValue == 13){

    vita1.style.display = "none";
    vita2.style.display = "none";
    vita3.style.display = "block";

  }
}

fader.addEventListener("input", rangeValue);

// калькулятор end



// видео

function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
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

