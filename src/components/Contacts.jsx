import React from "react";
import style from "@/styles/Contacts.module.scss";

function Contacts() {
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
            <img src="/linkedin.svg" alt="profile Linkedin" />
            <img src="/github.svg" alt="profile Github" />
          </div>
          <strong>©2022 ftoledo.online | Toledo Web Developer</strong>
        </div>
        <div>
          <form id="contact">
            <h1>Contactame</h1>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Email" />
            <textarea cols="30" rows="10" placeholder="Asunto"></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
