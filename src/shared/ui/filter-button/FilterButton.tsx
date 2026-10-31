import "./FilterButton.css";

interface FilterBtnProps {
  title: string;
  icon?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export function FilterButton({
  title,
  icon,
  active = false,
  onClick,
}: FilterBtnProps) {
  return (
    <button
      className={active ? "active btn_spec" : "btn_spec"}
      onClick={onClick}
    >
      {icon && (
        <img
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
          alt="skill"
          className="img_skill"
        />
      )}
      {title}
    </button>
  );
}
