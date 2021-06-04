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

// burger menu

// калькулятор

// var elem = document.querySelector('input[type="range"]');

// var rangeValue = function(){
//   var newValue = elem.value;
//   var target = document.querySelector('.value');
//   target.innerHTML = newValue;
// }

// elem.addEventListener("input", rangeValue);

var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;  
  var target = document.querySelectorAll('.value');
  target.forEach(el=>
  {
    el.innerHTML = newValue;    
  })  
}
elem.addEventListener("input", rangeValue);

// калькулятор

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