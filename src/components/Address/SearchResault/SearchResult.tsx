import React from "react";

import styles from "./SearchResult.module.scss";

type SearchResultProps = {
  suggestions: any[];
};
export const SearchResult: React.FC<SearchResultProps> = ({ suggestions }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Адреса</div>
      {suggestions.map((address) => (
        <div key={address.value} className={styles.item}>
          {address.value}
        </div>
      ))}
    </div>
  );
};
