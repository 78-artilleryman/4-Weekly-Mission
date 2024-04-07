import React from "react";
import Input from "@/src/components/signinPage/Input";
import styled from "styled-components";
import SubmitBtn from "@/src/components/signinPage/SubmitBtn";
import LogoBox from "@/src/components/signinPage/LogoBox";
import { useForm } from "react-hook-form";
import SocialBox from "@/src/components/signinPage/SocialBox";
import ErrorMesage from "@/src/components/signinPage/ErrorMesage";

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
  gap: 20px;
`;

function SignupPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "onBlur" });

  const emailValidation = register("userEmail", {
    required: {
      value: true,
      message: "이메일을 입력해 주세요",
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: "올바른 이메일 주소가 아닙니다.",
    },
  });

  const passwordValidation = register("userPw", {
    required: {
      value: true,
      message: "비밀번호를 입력해 주세요",
    },
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    },
  });

  const passwordCheckValidation = register("userPwCh", {
    required: {
      value: true,
      message: "비밀번호를 입력해 주세요",
    },
    validate: (value) => {
      if (watch("userPw") !== value) return "비밀번호가 일치하지 않아요.";
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <BackGround>
      <Layout>
        <LogoBox text="이미 회원이신가요?" linkText="로그인하기" />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="이메일"
            id="userEmail"
            type="email"
            placeholder="이메일을 입력해 주세요"
            validation={emailValidation}
          />
          {errors && (
            <ErrorMesage
              text={errors.userEmail?.message?.toString()}
            ></ErrorMesage>
          )}
          <Input
            label="비밀번호"
            id="userPw"
            type="password"
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
            validation={passwordValidation}
          />
          {errors && (
            <ErrorMesage
              text={errors.userPw?.message?.toString()}
            ></ErrorMesage>
          )}
          <Input
            label="비밀번호 확인"
            id="userPwCh"
            type="password"
            placeholder="비밀번호와 일치하는 값을 입력해 주세요"
            validation={passwordCheckValidation}
          />
          {errors && (
            <ErrorMesage
              text={errors.userPwCh?.message?.toString()}
            ></ErrorMesage>
          )}
          <SubmitBtn>회원가입</SubmitBtn>
        </Form>
        <SocialBox text="다른 방식으로 가입하기" />
      </Layout>
    </BackGround>
  );
}

export default SignupPage;
