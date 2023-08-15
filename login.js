document.getElementById('submit-btn').addEventListener('click', () => {
  const email = document.getElementById('input-email');
  const password = document.getElementById('input-password');
  console.log(email.value);
  console.log(password.value);
  if (email.value === 'email@gmail.com' && password.value === 'presentword') {
    window.location.href = 'calculate.html';
  } else {
    alert('Email or Password incorrect');
  }
  email.value = '';
  password.value = '';
});
