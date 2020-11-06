import React from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";

const Register = (props) => (
  <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button">Registrarme</button>
      </form>
      <Link to="/login">Iniciar Sesión</Link>
    </section>
  </section>
);

export default connect(null, null)(Register);
