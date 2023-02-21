import React from "react";
import { openGH, openLK } from "./openLink";
import style from "@/styles/Contacts.module.scss";
import email from "@emailjs/browser";

const initial = {
  name: "",
  email: "",
  asunto: "",
};

function Contacts() {
  const [datos, setDatos] = React.useState(initial);
  const [cargando, setCargando] = React.useState(false);
  const [error, setError] = React.useState({
    name: true,
    email: true,
    asunto: true,
  });

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    if (e.target.name === "name") {
      if (e.target.value.length < 3) {
        setError({ ...error, [e.target.name]: true });
        e.target.className = "invalid";
        e.target.setAttribute("class", "invalid");
      } else {
        setError({ ...error, [e.target.name]: false });
        e.target.classList.remove("invalid");
      }
    }
    if (e.target.name === "email") {
      //=========================//
      var copy = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      //=========================//
      if (!copy.test(e.target.value)) {
        setError({ ...error, [e.target.name]: true });
        e.target.className = "invalid";
      } else {
        setError({ ...error, [e.target.name]: false });
        e.target.classList.remove("invalid");
      }
    }
    if (e.target.name === "asunto") {
      if (e.target.value < 10) {
        setError({ ...error, [e.target.name]: true });
        e.target.className = "invalid";
      } else {
        setError({ ...error, [e.target.name]: false });
        e.target.classList.remove("invalid");
      }
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!datos.name.length) return;
    if (!datos.email.length) return;
    if (!datos.asunto.length) return;
    setCargando(true);

    fetch("/api/v", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((e) => {
        email
          .send(e.service, e.template, datos, e.publicKey)
          .then((response) => {
            setCargando(false);
          })
          .catch((err) => {
            console.log(error);
            setCargando(false);
          });
      });
  };

  return (
    <div className={style.contacts}>
      <div className={style.bg}>
        <div className={style.ex}>
          <div className={style.logo}>
            <img src="/logo.png" alt="Toledo Dev Logo" />
            <div>
              <h1 className={style.title}>ToledoFernando</h1>
              <h2>Developer - Full Stack</h2>
            </div>
          </div>
          <h3>Puedes revisar mi perfil en LinkedIn y GitHub</h3>
          <div className={style.profile}>
            <img onClick={openLK} src="/linkedin.svg" alt="profile Linkedin" />
            <img onClick={openGH} src="/github.svg" alt="profile Github" />
          </div>
          <strong>
            ©{new Date().getFullYear()} ftoledo.online | Toledo Web Developer
          </strong>
        </div>
        <div>
          <form onSubmit={sendEmail} id="contact">
            <h6>Contactame</h6>
            <input
              onBlur={validate}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Nombre"
            />
            <input
              onBlur={validate}
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Email"
            />
            <textarea
              onBlur={validate}
              onChange={handleChange}
              name="asunto"
              cols="30"
              rows="10"
              placeholder="Asunto"
            ></textarea>

            <button
              className={!cargando ? style.load : null}
              disabled={error.name || error.email || error.asunto}
            >
              {cargando ? <img src="/load.svg" /> : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
