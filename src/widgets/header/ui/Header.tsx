import { MainButton } from "@/shared/ui/main-button";
import { links } from "@/shared/config";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="container header">
      <Link
        to="/"
        className="container_logo"
      >
        <img
          className="header_logo"
          alt="logo"
          src="https://cdn-eu.icons8.com/docs/Iwz4SPIGQ0WmmSfvOv4ucg/fqsaZLJOtUGVxQ8s6OMeRQ.u5uxqHnDIEKpHtEGAQEI0w.svg"
        />
        <h2 className="logo_name">Yeahub</h2>
      </Link>

      <div>
        <ul className="list_links">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="container_buttons">
        <MainButton text={"Войти"} />
        <MainButton text={"Зарегистрироваться"} />
      </div>
    </div>
  );
}
