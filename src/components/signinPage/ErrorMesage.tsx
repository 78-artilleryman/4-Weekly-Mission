import React from "react";
import styled from "styled-components";

const Error = styled.p`
  color: #ff5b56;
  font-size: 14px;
  font-weight: 400;
`;

function ErrorMesage({ text }: { text: string | undefined }) {
  return <Error>{text}</Error>;
}

export default ErrorMesage;
