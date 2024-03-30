import styled from "styled-components";
import FolderCategoryItem from "./FolderCategoryItem";
import { FolderCategoryType } from "@/src/interface/types";
import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { getUserFolder } from "@/src/utils/Api";

const FolderCategory = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 1124px) {
    flex-wrap: wrap;
    max-width: 550px;
  }
`;

function FolderCategoryList() {
  const [folders, setFolders] = useState<FolderCategoryType>();

  useEffect(() => {
    getUserFolder().then(setFolders);
  }, []);

  return (
    <FolderCategory>
      <FolderCategoryItem id={null}>전체</FolderCategoryItem>
      {folders?.data.map((folder) => (
        <FolderCategoryItem key={folder.id} {...folder}>
          {folder.name}
        </FolderCategoryItem>
      ))}
    </FolderCategory>
  );
}

export default FolderCategoryList;
