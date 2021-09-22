import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import useIcon from '../assets/static/user.png';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="logo" />
    </Link>

    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={useIcon} alt="user" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <Link to="/NotFound">
            Cuenta
          </Link>
        </li>
        <li>
          <Link to="/login">
            Iniciar sesión
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
