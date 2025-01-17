import React, { useEffect, useState } from "react";
import Footer from "components/common/Footer";
import { getSampleFolder } from "utils/Api";
import Banner from "components/share/Banner";
import styled from "styled-components";
import SearchBar from "components/common/SearchBar";
import ShareCardList from "components/share/ShareCardList";
import { FoldersType } from "interface/Type";

const Section = styled.section`
  max-width: 1060px;
  background-color: var(--color-white);
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 1124px) {
    max-width: 704px;
  }

  @media (max-width: 767px) {
    max-width: 340px;
  }
`;

function Shared() {
  const [folders, setFolders] = useState<FoldersType>();

  useEffect(() => {
    getSampleFolder().then(setFolders);
  }, []);

  return (
    <>
      <Banner folders={folders} />
      <Section>
        <SearchBar />
      </Section>
      <Section>
        <ShareCardList links={folders?.folder.links} />
      </Section>
      <Footer />
    </>
  );
}

export default Shared;
