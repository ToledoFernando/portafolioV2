import { useEffect, useRef, useState } from "react";
import style from "@/styles/Navbar.module.scss";

function NavBar({ children }) {
  const bg = useRef();
  const [op, setOp] = useState(0);
  const [menu, setMenu] = useState(false);

  const nv = (e) => {
    // console.log(Math.round(e.target.scrollingElement.scrollTop));
    if (Math.round(e.target.scrollingElement.scrollTop) > 60) {
      bg.current.setAttribute(
        "style",
        "background-color: #000000c4; backdrop-filter: blur(5px)"
      );
    }
    if (Math.round(e.target.scrollingElement.scrollTop) < 60) {
      bg.current.setAttribute(
        "style",
        "background-color: #00000000; backdrop-filter: blur(0px)"
      );
    }
  };

  const showMenu = () => {
    if (!menu) {
      console.log("MENU EXTENDIDO");
      setMenu(true);
    } else {
      setMenu(false);
      console.log("Menu Escondido");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", nv);
  }, []);
  return (
    <>
      <nav className={style.nav}>
        <div className={style.div2}>
          <span className={style.bg} ref={bg}></span>
          <div className={style.logo}>
            <img src="/logo.png" alt="Toledo Dev Logo" />
            <div>
              <h1 className={style.title}>ToledoFernando</h1>
              <h2>Developer - Full Stack</h2>
            </div>
          </div>
          <div className={style.menu} onClick={showMenu}>
            <div className={menu ? style.at : style.al}></div>
            <div className={menu ? style.ac : style.al}></div>
            <div className={menu ? style.ab : style.al}></div>
          </div>
          <ul className={menu ? style.navS : style.navH}>
            <li>
              <a href="#" onClick={() => setMenu(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenu(false)}>
                Sobre mi
              </a>
            </li>
            <li>
              <a href="#proyects" onClick={() => setMenu(false)}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenu(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
}

export default NavBar;
