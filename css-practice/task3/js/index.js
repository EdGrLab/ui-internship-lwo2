
/* eslint-env browser */
/* eslint no-unused-vars: */
const sliders = [...document.querySelectorAll('.slide-container')];
sliders.forEach((el) => {
  moveSlide(el);
});

function moveSlide(slider) {
  const slidesArr = [...slider.querySelectorAll('.slide-block')];
  const arrowLeft = slider.querySelector('.arrow-left');
  const arrowRight = slider.querySelector('.arrow-right');
  arrowLeft.addEventListener('click', showSlide, false);
  arrowRight.addEventListener('click', showSlide, false);


  function showSlide(e) {
    const curr = e.target;

    if (curr == arrowLeft) {
      slidesArr[0].style.display = 'none';
      slidesArr[1].style.display = 'block';
    }

    if (curr == arrowRight) {
      slidesArr[1].style.display = 'none';
      slidesArr[0].style.display = 'block';
    }
  }
}

function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

let imgIndex = 1;
showSlides(imgIndex);

function currentSlide(n) {
  showSlides(imgIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) imgIndex = 1;
  if (n < 1) imgIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[imgIndex-1].style.display = 'block';
}


function initAccordion(accordionElem) {
  function handlePanelClick(event) {
    showPanel(event.currentTarget);
  }

  function showPanel(panel) {
    let expandedPanel = accordionElem.querySelector('.active-tab');
    if (expandedPanel) {
      expandedPanel.classList.remove('active-tab');
    }
    panel.classList.add('active-tab');
  }

  let allPanelElems = accordionElem.querySelectorAll('.accordion-item');
  for (let i = 0, len = allPanelElems.length; i < len; i++) {
    allPanelElems[i].addEventListener('click', handlePanelClick);
  }

  showPanel(allPanelElems[0]);
}
initAccordion(document.querySelector('.accordion-tab'));
