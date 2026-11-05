import { useSearchParams } from "react-router-dom";
import "./Pagination.css";

const pages = [1, 2, 3, 4, 5];

export function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");

  function setPage(newPage: number) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", String(newPage));
    setSearchParams(newParams);
  }

  return (
    <div className="container_pagination">
      <button
        className="btn_switch"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <img
          src="https://img.icons8.com/ios-filled/50/left.png"
          alt="Назад"
        />
      </button>
      <div className="pagination">
        {pages.map((pageNum) => (
          <button
            onClick={() => setPage(pageNum)}
            key={pageNum}
            className={
              pageNum === page ? "btn_page active_pagination" : "btn_page"
            }
          >
            {pageNum}
          </button>
        ))}
      </div>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === 5}
        className="btn_switch"
      >
        <img
          src="https://img.icons8.com/ios-filled/50/right--v1.png"
          alt="left"
        />
      </button>
    </div>
  );
}
