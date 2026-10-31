import { useNavigate } from "react-router-dom";
import { MainButton } from "@/shared/ui/main-button";
import "./ErrorPage.css";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <h2>Упс! Страница не найдена</h2>
      <p>Проверьте адрес или вернитесь назад.</p>

      <div className="error-buttons">
        <MainButton text="← Назад" handleStart={() => navigate(-1)} />
        <MainButton
          text="На главную"
          handleStart={() => navigate("/questions")}
        />
      </div>
    </div>
  );
}
