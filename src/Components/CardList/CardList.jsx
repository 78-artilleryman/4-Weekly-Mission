import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import styles from "./css/CardList.module.css";

function CardList({ folderObject }) {
  if (!folderObject) {
    return null;
  }

  const { folder } = folderObject;
  const { links } = folder;

  return (
    <section className={styles.main_contents}>
      <SearchBar />
      <div className={styles.card_list}>
        {links.map(link => (
          <Card key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}

export default CardList;
