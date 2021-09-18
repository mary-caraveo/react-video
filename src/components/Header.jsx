import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/kisspng.png';
import useIcon from '../assets/static/user.png';

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="logo" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={useIcon} alt="user" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="./assets/componentes/not-found.html">Cuenta</a></li>
        <li><a href="./assets/componentes/sign-in.html">Cerrar sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
