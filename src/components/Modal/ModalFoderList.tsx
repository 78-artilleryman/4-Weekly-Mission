import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalFolderItem from "./ModalFolderItem";
import { FolderCategoryType } from "@/src/interface/types";
import { InferGetServerSidePropsType } from "next";
import { getUserFolder } from "@/src/utils/Api";

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

function ModalFoderList() {
  const [folders, setFolders] = useState<FolderCategoryType>();

  const [currentFolder, setCurrentFolder] = useState(1);
  const handleClickTag = (folder: any) => {
    setCurrentFolder(folder.id);
  };

  useEffect(() => {
    getUserFolder().then(setFolders);
  }, []);

  return (
    <>
      {folders && (
        <FolderList>
          {folders.data.map((folder) => (
            <ModalFolderItem
              key={folder.id}
              folder={folder}
              onClick={() => handleClickTag(folder)}
              selected={currentFolder === folder.id}
            />
          ))}
        </FolderList>
      )}
    </>
  );
}

export default ModalFoderList;
