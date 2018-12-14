// /* eslint-env browser*/
const signupForm = document.getElementById('signup');
const btnDisable = document.getElementById('submit-btn');

const patterns = {
  name: /^[a-z]{3,}/,
  email: /^[^@]+@[^@]+.[^@]{2,}$/,
  pass: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+-]).{6,20}/
};

function validateForm(formId, e) {
  const inputArr = Array.from(document.getElementById(formId).children);
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].classList.contains('invalid')) {
      btnDisable.classList.add('disable-submit');
      return false;
    }
  }
}

function markInvalid(ev) {
  ev.target.classList.add('invalid');
}

function markValid(ev) {
  ev.target.classList.remove('valid');
}

function validate(ev) {
  const pattern = patterns[ev.target.name];
  if (!ev.target.value) {
    markValid(ev);
    markInvalid(ev);
  }
  if (pattern.test(ev.target.value)) {
    ev.target.classList.remove('invalid');
    ev.target.classList.add('valid');
  } else {
    markValid(ev);
    markInvalid(ev);
  }

  const inputs = [...signupForm.querySelectorAll('input')];
  const isSomeInvalid = inputs.some((el) =>
    el.classList.contains('invalid') || el.value === '');
  if (isSomeInvalid) {
    btnDisable.classList.add('disable-submit');
    btnDisable.setAttribute('disabled', true);
  } else {
    btnDisable.classList.remove('disable-submit');
    btnDisable.removeAttribute('disabled', false);
  }
}

const formAPI = {
  init: () => {
    /* eslint max-len: ["error", { "code": 100 }]*/
    signupForm.addEventListener('submit', validateForm.bind(null, 'signup'), true);
    signupForm.addEventListener('keyup', validate, true);
  },
};

export default formAPI;
