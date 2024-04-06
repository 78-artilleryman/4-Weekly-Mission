import React from "react";
import Input from "@/src/components/signinPage/Input";
import styled from "styled-components";
import SubmitBtn from "@/src/components/signinPage/SubmitBtn";
import LogoBox from "@/src/components/signinPage/LogoBox";
import { useForm } from "react-hook-form";
import SocialBox from "@/src/components/signinPage/SocialBox";

const BackGround = styled.div`
  width: 100%;
  padding: 80px 0px 180px 0px;
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

function index() {
  return (
    <BackGround>
      <Layout>
        <LogoBox text="이미 회원이신가요?" linkText="로그인하기" />
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
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
          ></Input>
          <Input
            label="비밀번호 확인"
            id="user_pw_ch"
            type="password"
            placeholder="비밀번호와 일치하는 값을 입력해 주세요"
          ></Input>
          <SubmitBtn>회원가입</SubmitBtn>
        </Form>
        <SocialBox text="다른 방식으로 가입하기" />
      </Layout>
    </BackGround>
  );
}

export default index;
