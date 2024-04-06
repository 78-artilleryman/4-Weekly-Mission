import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 15px 16px;
  background: #f5f5f5;
  margin-bottom: 40px;
  display: flex;
  min-height: 55px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  fill: rgba(0, 0, 0, 0);
`;

const Input = styled.input`
  width: 95%;
  background: #f5f5f5;
  border: none;
  margin-left: 10px;

  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    width: 91%;
  }
`;

const ResetBtn = styled.img`
  cursor: pointer;
`;

function SearchBar() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key.key === "Enter" && value.trim() !== "") {
      const queryParams = new URLSearchParams();
      queryParams.set("search", value.trim());
      console.log(queryParams.toString());
      router.push({
        pathname: "/folder",
        query: `${queryParams.toString()}`,
      });
    }
    if (value.trim() === "") {
      router.push(`/folder`);
    }
  };

  const Reset = () => {
    setValue("");
    router.push(`/folder`);
  };
  return (
    <Container>
      <Icon src="Icons/Search.svg" alt="Search" />
      <Input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="링크를 검색해 보세요."
        onKeyDown={onSubmit}
      />
      {value && (
        <ResetBtn src="Icons/searchReset.svg" alt="reset" onClick={Reset} />
      )}
    </Container>
  );
}

export default SearchBar;
