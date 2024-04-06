import React from "react";
import logo from "@/public/Icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Text = styled.p`
  color: var(--black, #000);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-bottom: 30px;
`;

const LinkStyle = {
  color: "#6D6AFE",
  fontSize: "16px",
  fontWeight: 600,
};

function LogoBox() {
  return (
    <Layout>
      <Link href={`/`}>
        <Image src={logo} alt="logo" width={210} height={38}></Image>
      </Link>
      <Text>
        회원이 아니신가요?{" "}
        <Link style={LinkStyle} href={`/`}>
          회원 가입하기
        </Link>
      </Text>
    </Layout>
  );
}

export default LogoBox;
