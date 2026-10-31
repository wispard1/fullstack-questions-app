import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <h1 className="footer_title">Yeahub</h1>
        <p className="footer_text">
          Выбери, каким будет IT завтра, вместе с нами
        </p>
        <p className="footer_desc">
          YeaHub — это полностью открытый проект, призванный объединить
          и улучшить IT-сферу. Наш исходный код доступен для просмотра
          на GitHub. Дизайн проекта также открыт для ознакомления в Figma.
        </p>
      </div>

      <hr className="footer_hr" />
      <div className="footer_icons">
        <p className="icons_text">© 2024 YeaHub Документы</p>
        <div className="icons_flex">
          <p className="icons_text">Ищите нас и в других соцсетях @yeahub_it</p>
          <img
            alt="Social icon"
            src="https://cdn-eu.icons8.com/docs/YnSPHKs6ZkO6zo1Ynd0pMA/LHrXNvu75kqs4TSOEJmlIQ.3-z1Xui8tkaYQoJL9aZ8Qg.svg"
            width="24"
            height="24"
          />
        </div>
      </div>
    </footer>
  );
}