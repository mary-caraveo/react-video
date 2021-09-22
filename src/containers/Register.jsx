import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/register.scss';

const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input className="input-register" aria-label="Nombre" type="text" placeholder="Nombre" />
        <input className="input-register" aria-label="Correo" type="text" placeholder="Correo" />
        <input className="input-register" aria-label="contraseña" type="password" placeholder="contraseña" />
        <button className="button" type="button">Registrarme</button>
      </form>
      <p className="login_register">
        <Link to="/login">
          Iniciar sesión
        </Link>
      </p>
    </section>
  </section>
);

export default Register;
