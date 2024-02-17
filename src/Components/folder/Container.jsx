import React, { useState } from "react";
import Wrapper from "../common/layout/Wrapper";
import SearchBar from "../common/SearchBar/SearchBar";
import styles from "./Container.module.css";
import FolderCard from "./FolderCard";
import Folder from "./Folder";

function FolderContainer({
  folder,
  cardLink,
  folderState,
  setFolderState,
}) {
  if (!folder) {
    return null;
  }
  if (!cardLink) {
    return null;
  }
  const { data: folderData } = folder;
  const { data: cardData } = cardLink;

  return (
    <section className={styles.folder_section}>
      <Wrapper className={styles.folder_container}>
        <SearchBar />
        <div className={styles.folder_filter}>
          <ul className={styles.folder_list}>
            <li
              className={styles.folder}
              onClick={() =>
                setFolderState({
                  name: "전체",
                  value: null,
                })
              }
            >
              전체
            </li>
            {folderData.map(data => (
              <Folder
                key={data.id}
                folderData={data}
                className={styles.folder}
                setFolderState={setFolderState}
              />
            ))}
          </ul>
          <div className={styles.folder_add}>
            <p>폴더추가</p>
            <img src="/Icons/add.svg" alt="폴더추가" />
          </div>
        </div>
        <div className={styles.folder_util}>
          <h2 className={styles.folder_title}>{folderState.name}</h2>
          <div className={styles.folder_btnList}>
            <div className={styles.folder_btnList_btn}>
              <img src="/Icons/share.svg" alt="공유" />
              <p>공유</p>
            </div>
            <div className={styles.folder_btnList_btn}>
              <img src="/Icons/pen.svg" alt="이름 변경" />
              <p>이름 변경</p>
            </div>
            <div className={styles.folder_btnList_btn}>
              <img src="/Icons/delete.svg" alt="삭제" />
              <p>삭제</p>
            </div>
          </div>
        </div>
        <div className={styles.card_list}>
          {cardData.map(data => (
            <FolderCard key={data.id} cardData={data} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

export default FolderContainer;
