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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <BackGround>
      <Layout>
        <LogoBox text="회원이 아니신가요?" linkText="회원 가입하기" />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
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
          </div>

          <div>
            <Input
              label="비밀번호"
              id="userPw"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              validation={passwordValidation}
            />
            {errors && (
              <ErrorMesage
                text={errors.userPw?.message?.toString()}
              ></ErrorMesage>
            )}
          </div>
          <SubmitBtn>로그인</SubmitBtn>
        </Form>
        <SocialBox text="소셜 로그인" />
      </Layout>
    </BackGround>
  );
}

export default SigninPage;
