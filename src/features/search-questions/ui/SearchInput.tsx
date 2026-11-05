import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../model";
import "./SearchInput.css";

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get("q") || "";
  const [value, setValue] = useState<string>(currentQuery);
  const [prevQuery, setPrevQuery] = useState<string>(currentQuery);

  if (currentQuery !== prevQuery) {
    setPrevQuery(currentQuery);
    setValue(currentQuery);
  }

  const updateUrl = (query: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (query) {
      newParams.set("q", query);
    } else {
      newParams.delete("q");
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const { debouncedCallback, clear } = useDebounce(updateUrl, 1000);

  function handleClear() {
    clear();
    setValue("");

    const newParams = new URLSearchParams(searchParams);
    newParams.delete("q");
    newParams.set("page", "1");
    setSearchParams(newParams);
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedCallback(e.target.value);
  };

  return (
    <div className="input_container">
      <div className="icon_search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
      </div>
      <input
        value={value}
        onChange={handleOnChange}
        type="text"
        className="main_input"
        placeholder="Введите вопрос..."
      />
      <button onClick={handleClear} className="reset_btn">
        x
      </button>
    </div>
  );
}
