import '../Style/tailwind.css';
import { loginPage } from './pages/loginPage.js';
import { registerPage } from './pages/registerPage.js';

const pathname = window.location.pathname;

const $app = document.querySelector('#app');

if (pathname === '/login') $app.appendChild(loginPage());
if (pathname === '/register') $app.appendChild(registerPage());