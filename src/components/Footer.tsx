import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import faceBookLogo from "@/public/Icons/facebook_logo.png";
import twitterLogo from "@/public/Icons/twitter_logo.png";
import youtubeLogo from "@/public/Icons/youtube_logo.png";
import instagramLogo from "@/public/Icons/instagram_logo.png";

const Container = styled.footer`
  width: 100%;
  height: 160px;
  background-color: var(--black-color);
  margin-top: 60px;

  @media (max-width: 767px) {
    position: relative;
    padding: 32px 32px 64px 32px;
  }
`;

const Layout = styled.div`
  max-width: 1400px;
  padding: 32px 16px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
`;

const Text = styled.p`
  color: #676767;
  text-align: center;
  font-family: Acme;
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 767px) {
    position: absolute;
    bottom: 10px;
  }
`;

const PageLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const LinkStyle = {
  color: "#cfcfcf",

  fontSize: "1rem",
  fontWeight: "400",
  textDecoration: "none",
};

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

function Footer() {
  return (
    <Container>
      <Layout>
        <Text>©codeit - 2023</Text>
        <PageLinks>
          <Link style={LinkStyle} href="#">
            Privacy Policy
          </Link>
          <Link style={LinkStyle} href="#">
            FAQ
          </Link>
        </PageLinks>
        <SocialLinks>
          <Link href="https://www.facebook.com/" target="_blank">
            <Image
              src={faceBookLogo}
              alt="facebook_link"
              width={18}
              height={18}
            />
          </Link>
          <Link href="https://twitter.com/?lang=ko" target="_blank">
            <Image
              src={twitterLogo}
              alt="twitter_link"
              width={18}
              height={18}
            />
          </Link>
          <Link href="https://www.youtube.com/" target="_blank">
            <Image
              src={youtubeLogo}
              alt="youtube_link"
              width={18}
              height={18}
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image
              src={instagramLogo}
              alt="instagram_link"
              width={18}
              height={18}
            />
          </Link>
        </SocialLinks>
      </Layout>
    </Container>
  );
}

export default Footer;
