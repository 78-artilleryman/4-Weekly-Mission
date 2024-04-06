import Image from "next/image";
import React from "react";
import googleIcon from "@/public/Icons/google.svg";
import kakao from "@/public/Icons/kakaolg.svg";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-gray10, #e7effb);
`;

const Text = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-size: 14px;
  font-weight: 400;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

function SocialBox() {
  return (
    <Layout>
      <Text>소셜 로그인</Text>
      <SocialLinks>
        <Image src={googleIcon} alt="google"></Image>
        <Image src={kakao} alt="kakao"></Image>
      </SocialLinks>
    </Layout>
  );
}

export default SocialBox;
