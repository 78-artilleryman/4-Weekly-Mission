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
`;

const LinkStyle = {
  color: "#6D6AFE",
  fontSize: "16px",
  fontWeight: 600,
};

interface LogoBox {
  text: string;
  linkText: string;
}

function LogoBox({ text, linkText }: LogoBox) {
  return (
    <Layout>
      <Link href={`/`}>
        <Image src={logo} alt="logo" width={210} height={38}></Image>
      </Link>
      <Text>
        {text}{" "}
        <Link style={LinkStyle} href={`/`}>
          {linkText}
        </Link>
      </Text>
    </Layout>
  );
}

export default LogoBox;
