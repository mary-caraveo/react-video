import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import googleIcon from '../assets/static/google-.png';
import facebookIcon from '../assets/static/facebook-.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input-login"
              aria-label="correo"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input-login"
              aria-label="contraseña"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button" type="submit">
              Iniciar sesión
            </button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="checkbox" />
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

          <p className="login__container--register">
            No tienes ninguna cuenta
            <Link to="/register">Registrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
