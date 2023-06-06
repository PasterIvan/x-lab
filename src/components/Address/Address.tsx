import React, { useCallback, useState } from "react";

import { addressTC } from "../../bll/reducers/searchReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import ic_search_w from "../../img/ic_search_w.svg";

import styles from "./Address.module.scss";
import { SearchResult } from "./SearchResault/SearchResult";

export const Address: React.FC = () => {
  const dispatch = useAppDispatch();
  const { suggestions } = useAppSelector((state) => state.search);
  const [keyword, setKeyword] = useState("");

  const setQuery = useCallback(() => {
    if (keyword.length > 2) dispatch(addressTC({ query: keyword }));
  }, [keyword]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Поиск адресов</div>
      <p>Введите интересующий вас адрес</p>
      <form className={styles.search}>
        <input
          type="text"
          minLength={3}
          placeholder="Введите интересующий вас адрес"
          onChange={(event) => setKeyword(event.currentTarget.value)}
        />
        <button type="button" onClick={setQuery}>
          <img src={ic_search_w} alt="search" />
          Поиск
        </button>
      </form>
      {suggestions.length > 0 && <SearchResult suggestions={suggestions} />}
    </div>
  );
};
