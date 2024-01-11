let navbar = document.querySelector('.navbar');
let btnLogin = document.querySelector('.btn-login');

function show() {
  if (navbar.className === 'navbar' && btnLogin.className === 'btn-login') {
    navbar.className += ' responsive';
    btnLogin.className += ' responsive2';
  } else {
    navbar.className = 'navbar';
    btnLogin.className = 'btn-login';
  }
}
