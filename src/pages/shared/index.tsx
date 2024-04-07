import Footer from "@/src/components/Footer";
import Banner from "../../components/sharedPage/Banner";
import styled from "styled-components";
import SearchBar from "@/src/components/SearchBar";
import ShareCardList from "../../components/sharedPage/ShareCardList";
import { InferGetServerSidePropsType } from "next";
import { FoldersType } from "../../interface/types";

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

export const getServerSideProps = async () => {
  const BASE_URL = "https://bootcamp-api.codeit.kr/api/";
  // Fetch data from external API
  const res = await fetch(`${BASE_URL}sample/folder`);
  const repo = await res.json();
  const { folder } = repo;
  // Pass data to the page via props
  return { props: { folder } };
};

function Shared({
  folder,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Banner folder={folder} />
      <Section>
        <SearchBar />
      </Section>
      <Section>
        <ShareCardList links={folder?.links} />
      </Section>
      <Footer />
    </>
  );
}

export default Shared;