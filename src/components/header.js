import "../css/cabeza.css";

// ------- LOGOS -----------
import AmericaLogoTipo from "/public/img/Logotipo-america-oficial.png";
import AmericaLogo from "/public/img/logo-america.png";
import fondo from "/public/img/triangle.svg";

// --------FUNCIONES-----------

document.querySelector("#header").innerHTML = `
  <header class="cabeza">
    <nav>
        <a href="/index.html" >
            <img class="logo" alt="logo de America de Cali" src="${AmericaLogo}"  />
        </a>
    </nav>
    
    
  </header>
`;
