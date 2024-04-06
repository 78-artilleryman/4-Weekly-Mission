import React from "react";
import Input from "@/src/components/signinPage/Input";
import styled from "styled-components";
import SubmitBtn from "@/src/components/signinPage/SubmitBtn";
import LogoBox from "@/src/components/signinPage/LogoBox";
import { useForm } from "react-hook-form";
import SocialBox from "@/src/components/signinPage/SocialBox";

const BackGround = styled.div`
  width: 100%;
  padding: 100px 0px 200px 0px;
  margin: 0 auto;
  background: var(--Linkbrary-bg, #f0f6ff);
`;

const Layout = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 30px;

  @media (max-width: 767px) {
    width: 325px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function SigninPage() {
  return (
    <BackGround>
      <Layout>
        <LogoBox text="회원이 아니신가요?" linkText="회원 가입하기" />
        <Form action="">
          <Input
            label="이메일"
            id="user_email"
            type="email"
            placeholder="이메일을 입력해 주세요"
          ></Input>
          <Input
            label="비밀번호"
            id="user_pw"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
          ></Input>
          <SubmitBtn>로그인</SubmitBtn>
        </Form>
        <SocialBox text="소셜 로그인" />
      </Layout>
    </BackGround>
  );
}

export default SigninPage;
