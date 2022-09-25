const buttonSubmit = document.querySelector('#btnSubmit');
const getEmail = document.querySelector('#input1');
const getPassword = document.querySelector('#input2');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

buttonSubmit.addEventListener('click', () => {
  if (getEmail.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

submitBtn.disabled = true;

agreement.addEventListener('click', () => {
  if (agreement.disabled === false) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
