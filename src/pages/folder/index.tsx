import Banner from "./components/Banner";
import SearchBar from "@/src/components/SearchBar";
import FolderCategoryList from "./components/FolderCategoryList";
import FolderTitle from "./components/FolderTitle";
import FolderCardList from "./components/FolderCardList";
import Footer from "@/src/components/Footer";
import FolderAddButton from "./components/FolderAddButton";
import FolderOption from "./components/FolderOption";
import SearchResultTitle from "./components/SearchResultTitle";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1060px;
  background-color: var(--color-white);
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;

  @media (max-width: 1124px) {
    max-width: 700px;
  }

  @media (max-width: 767px) {
    max-width: 340px;
  }
`;

function Folder() {
  return (
    <>
      <Banner />
      <Section>
        <SearchBar />
        <SearchResultTitle />
      </Section>
      <Section>
        <FolderCategoryList />
        <FolderAddButton />
      </Section>
      <Section>
        <FolderTitle />
        <FolderOption />
      </Section>
      <Section>
        <FolderCardList />
      </Section>
      <Footer />
    </>
  );
}

export default Folder;
