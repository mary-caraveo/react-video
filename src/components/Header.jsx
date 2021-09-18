import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className="header">
    <img className="header__img" src="./assets/img/kisspng.png" alt="logo" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="./assets/img/user.png" alt="user" />
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
