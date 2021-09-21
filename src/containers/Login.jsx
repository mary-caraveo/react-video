import React from 'react';
import googleIcon from '../assets/static/google-.png';
import facebookIcon from '../assets/static/facebook-.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form action="/index.html" className="login__container--form">
        <input className="input-login" aria-label="correo" type="text" placeholder="Correo" />
        <input className="input-login" aria-label="contraseña" type="password" placeholder="Contraseña" />
        <button className="button" type="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" name="" id="cbox1" value="checkbox" />
            Recuerdame
          </label>
          <a href="#">Olvide mi contraseña</a>
        </div>
      </form>

      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} alt="Google" />
          Inicia sesión con Google
        </div>

        <div>
          <img src={facebookIcon} alt="Facebook" />
          Inicia sesión con Facebook
        </div>
      </section>

      <p className="login__container--register">No tienes ninguna cuenta
        <a href="sign-up.html"> Registrate</a>
      </p>
    </section>
  </section>
);

export default Login;
