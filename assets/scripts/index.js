// header/navbar
const searchBtn = document.querySelector('#search-btn');
const themeBtn = document.querySelector('.theme-btn');
const menuBtn = document.querySelector('.menu-btn');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  searchBtn.parentElement.classList.toggle('open');
  searchBtn.previousElementSibling.focus();
});
searchBtn.previousElementSibling.addEventListener('focusout', (e) => {
  searchBtn.parentElement.classList.toggle('open');
});
themeBtn.addEventListener('click', () => {
  themeBtn.classList.toggle('dark');
});
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuBtn.parentElement.nextElementSibling.children[0].classList.toggle(
    'openMenu'
  );
});

// carousel section

const carousel = document.querySelector('.carousel');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

window.onload = () => {
  const carouselTimer = setInterval(() => {
    var ml = carousel.style.marginLeft
      ? parseInt(carousel.style.marginLeft)
      : 0;
    if (ml > -300) carousel.style.marginLeft = (ml - 100).toString() + 'vw';
    else carousel.style.marginLeft = 0;
  }, 4000);

  const carouselTimer2 = setInterval(() => {
    if (window.innerWidth < 1024) {
      var ml = carousel2.style.marginLeft
        ? parseInt(carousel2.style.marginLeft)
        : 0;
      if (ml > -500) {
        carousel2.style.marginLeft = (ml - 100).toString() + 'vw';
        changeActiveDot(findActiveDot());
      } else {
        carousel2.style.marginLeft = 0;
        changeActiveDot(0);
      }
    } else if (window.innerWidth < 1440) {
      var ml = carousel2.style.marginLeft
        ? parseInt(carousel2.style.marginLeft)
        : 0;
      if (ml > -2000) {
        carousel2.style.marginLeft = (ml - 1000).toString() + 'px';
        changeActiveDot(findActiveDot());
      } else {
        carousel2.style.marginLeft = 0;
        changeActiveDot(0);
      }
    } else {
      var ml = carousel2.style.marginLeft
        ? parseInt(carousel2.style.marginLeft)
        : 0;
      if (ml > -2400) {
        carousel2.style.marginLeft = (ml - 1200).toString() + 'px';
        changeActiveDot(findActiveDot());
      } else {
        carousel2.style.marginLeft = 0;
        changeActiveDot(0);
      }
    }
  }, 4000);
};
next.addEventListener('click', () => {
  var ml = carousel.style.marginLeft ? parseInt(carousel.style.marginLeft) : 0;
  if (ml <= -300) carousel.style.marginLeft = 0;
  else carousel.style.marginLeft = (ml - 100).toString() + 'vw';
});
prev.addEventListener('click', () => {
  var ml = carousel.style.marginLeft ? parseInt(carousel.style.marginLeft) : 0;
  if (ml >= 0) carousel.style.marginLeft = '-300vw';
  else carousel.style.marginLeft = (ml + 100).toString() + 'vw';
});

// carousel testimonials

const carousel2 = document.querySelector('.comments');
const carousel2Dots = Array.from(
  document.querySelector('.carousel-dots').children
);
const findActiveDot = () => {
  for (var i = 0; i < carousel2Dots.length; i++) {
    if (carousel2Dots[i].classList.contains('active')) return i + 1;
  }
};
const changeActiveDot = (x) => {
  for (var i = 0; i < carousel2Dots.length; i++) {
    carousel2Dots[i].classList.remove('active');
  }
  carousel2Dots[x].classList.add('active');
};
carousel2Dots.forEach((itm) => {
  itm.addEventListener('click', (e) => {
    var dotIndex = parseInt(e.target.classList[0].split('-')[1]) - 1;
    changeActiveDot(dotIndex);
    carousel2.style.marginLeft = (-dotIndex * 100).toString() + 'vw';
  });
});
//themeing
const darkMode = window.matchMedia('(prefers-color-schema: dark)').matches;

if (!localStorage.getItem('current-theme'))
  localStorage.setItme('current-theme', darkMode ? 'dark' : 'default');
else if (localStorage.getItem('current-theme') === 'dark') {
  alert('dark');
} else if (localStorage.getItem('current-theme') === 'default') {
  alert('default');
}
