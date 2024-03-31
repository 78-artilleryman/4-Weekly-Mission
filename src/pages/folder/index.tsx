import Banner from "../../components/folderPage/Banner";
import SearchBar from "@/src/components/SearchBar";
import FolderCategoryList from "../../components/folderPage/FolderCategoryList";
import FolderTitle from "../../components/folderPage/FolderTitle";
import FolderCardList from "../../components/folderPage/FolderCardList";
import Footer from "@/src/components/Footer";
import FolderAddButton from "../../components/folderPage/FolderAddButton";
import FolderOption from "../../components/folderPage/FolderOption";
import SearchResultTitle from "../../components/folderPage/SearchResultTitle";
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
