
/* eslint-env browser */
/* eslint no-unused-vars: */
// slider

(function slider() {
  const prev = [...document.querySelectorAll('.arrow-left')];
  const next = [...document.querySelectorAll('.arrow-right')];
  const slide = [...document.querySelectorAll('.slide-block')];
  let offset = 0;

  function move() {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style['transform'] = 'translate3d(' + offset + ', 0, 0)';
    }
  }

  for (let i = 0; i < next.length; i++) {
    next[i].addEventListener('click', function() {
      if (parseInt(offset) <= -2300) {
        offset = 1150;
      }
      offset = (parseInt(offset) - 1150) + 'px';
      move();
    });

    prev[i].addEventListener('click', function() {
      if (parseInt(offset) >= 0) {
        offset = -3450;
      }
      offset = (parseInt(offset) + 1150) + 'px';
      move();
    });
  }
}());

// modal
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


// accordion
function initAccordion(accordionElem) {
  let allPanelElems = [...accordionElem.querySelectorAll('.accordion-item')];
  const arrayImg = [...document.querySelectorAll('.guy-with-pic img')];
  function handlePanelClick(event) {
    showPanel(event.currentTarget);
  }

  function showImg(tabIndex) {
    arrayImg.forEach((el, i) => {
      if (i != tabIndex) {
        el.classList.add('hide-pic');
      } else {
        el.classList.remove('hide-pic');
      }
    });
  }

  function showPanel(panel) {
    let expandedPanel = accordionElem.querySelector('.active-tab');
    if (expandedPanel) {
      expandedPanel.classList.remove('active-tab');
    }
    panel.classList.add('active-tab');
    showImg(panel.getAttribute('data-index'));
  }

  for (let i = 0, len = allPanelElems.length; i < len; i++) {
    allPanelElems[i].addEventListener('click', handlePanelClick);
  }

  showPanel(allPanelElems[0]);
}
initAccordion(document.querySelector('.accordion-tab'));
