import Image from "next/image";
import React, { InputHTMLAttributes, ReactNode, useRef, useState } from "react";
import styled from "styled-components";
import setPwOff from "@/public/Icons/eye-off.svg";
import setPwOn from "@/public/Icons/eye-on.svg";

type InputStyledProps = {
  $error?: boolean;
};

const Layout = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

const Label = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;

const InputForm = styled.input<InputStyledProps>`
  width: 100%;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? "#FF5B56" : "#CCD5E3")};
  background: #fff;

  &::placeholder {
    color: #9fa6b2;
  }
  &:focus {
    border: 1px solid #6d6afe;
  }
`;

const ImgPosition = styled.div`
  position: absolute;

  bottom: 15px;
  right: 18px;
`;

const ErrorMesage = styled.p`
  color: #ff5b56;
  font-size: 14px;
  font-weight: 400;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
}

function Input({ id, type = "text", placeholder, error }: InputProps) {
  const [pwState, setPwState] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const toggleEyesButton = () => {
    if (passwordRef.current) {
      if (pwState) {
        passwordRef.current.type = "text";
        setPwState(false);
      } else {
        passwordRef.current.type = "password";
        setPwState(true);
      }
    }
  };

  return (
    <>
      <Layout>
        <Label htmlFor={id}></Label>
        <InputForm
          id={id}
          type={type}
          placeholder={placeholder}
          ref={passwordRef}
          $error={error}
        />
        {type === "password" && (
          <ImgPosition onClick={toggleEyesButton}>
            {pwState ? (
              <Image src={setPwOff} alt="Pw-off" />
            ) : (
              <Image src={setPwOn} alt="Pw-on" />
            )}
          </ImgPosition>
        )}
      </Layout>
      {error && <ErrorMesage>test</ErrorMesage>}
    </>
  );
}

export default Input;
