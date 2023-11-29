import "./Navbar.styles.css";

function Navbar() {
  return (
    <nav>
      <ul className="contato">
        <li>
          <a
            href="https://www.linkedin.com/in/alex-santos-b020b5296"
            target="blank">
            <img src="/linkedin.svg" alt="linkedIn" title="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/alexsantos-dev" target="blank">
            <img src="/github.svg" alt="github" title="Github" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+5598981630767" target="blank">
            <img src="/whatsapp.svg" alt="whatsapp" title="Whatsapp" />
          </a>
        </li>
      </ul>
      <ul className="logo">
        <li>
          <a href="#">
            <img src="/logo.svg" alt="logo" className="logoIcon" />
          </a>
        </li>
      </ul>
      <ul className="sections">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Habilidades</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
