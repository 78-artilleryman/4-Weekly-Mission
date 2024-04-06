import React, { ReactNode } from "react";
import styled from "styled-components";

const Submit = styled.button`
  width: 100%;
  padding: 16px 20px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  border: none;
  color: var(--Grey-Light, #f5f5f5);
  font-size: 18px;
`;

interface SubmitBtnProps {
  children: ReactNode;
}

function SubmitBtn({ children }: SubmitBtnProps) {
  return <Submit type="submit">{children}</Submit>;
}

export default SubmitBtn;
