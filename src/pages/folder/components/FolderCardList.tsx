import React, { useEffect, useState } from "react";
import BlankCard from "@/src/components/BlankCard";
import styled from "styled-components";
import Card from "@/src/components/Card";
import { useFolder } from "../context/FolderContext";
import { LinkType } from "@/src/interface/types";
import { useRouter } from "next/router";
import { searchFolderLink } from "@/src/utils/Api";

const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1124px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 767px) {
    grid-template: repeat(1, 1fr) / repeat(1, 1fr);
    gap: 20px;
  }
`;

function FolderCardList() {
  const router = useRouter();
  const [links, setLinks] = useState([]);

  const { search } = router.query;
  const { folderFilter } = useFolder();

  useEffect(() => {
    searchFolderLink(folderFilter.id, search).then(setLinks);
  }, [folderFilter, search]);

  return (
    <>
      {links.length === 0 ? (
        <BlankCard>저장된 링크가 없습니다</BlankCard>
      ) : (
        <CardList>
          {links.map((link: any) => (
            <Card key={link.id} cardData={link} />
          ))}
        </CardList>
      )}
    </>
  );
}

export default FolderCardList;
