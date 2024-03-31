import React, { useState } from "react";
import styled from "styled-components";
import { useFolder } from "../../context/FolderContext";
import { useModal } from "../../hooks/useModal";
import ModalContainer from "@/src/components/Modal/Modal";
import * as Modal from "@/src/components/Modal/Modal";
import SocialIcons from "@/src/components/Modal/SocialIcons";
import Image from "next/image";
import shareIcon from "@/public/Icons/share.svg";
import penIcon from "@/public/Icons/pen.svg";
import deleteIcon from "@/public/Icons/delete.svg";

const OptionList = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 767px) {
    margin-top: 12px;
  }
`;

const Option = styled.div`
  display: flex;
  gap: 4px;
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

function FolderOption() {
  const { folderFilter } = useFolder();
  const { openModal, handleModalOpen, handleModalClose } = useModal();
  const [option, setOption] = useState("");

  return (
    <>
      {option === "삭제" && openModal && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더 삭제</Modal.Title>
          <Modal.SubTitle>{folderFilter.name}</Modal.SubTitle>
          <Modal.RedButton>삭제하기</Modal.RedButton>
        </ModalContainer>
      )}
      {option === "공유" && openModal && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더 공유</Modal.Title>
          <Modal.SubTitle>{folderFilter.name}</Modal.SubTitle>
          <SocialIcons id={folderFilter.id} />
        </ModalContainer>
      )}
      <OptionList>
        <Option
          onClick={() => {
            setOption("공유");
            handleModalOpen();
          }}
        >
          <Image src={shareIcon} alt="공유" width={18} height={18} />
          <p>공유</p>
        </Option>
        <Option>
          <Image src={penIcon} alt="이름 변경" width={18} height={18} />
          <p>이름 변경</p>
        </Option>
        <Option
          onClick={() => {
            setOption("삭제");
            handleModalOpen();
          }}
        >
          <Image src={deleteIcon} alt="삭제" width={18} height={18} />
          <p>삭제</p>
        </Option>
      </OptionList>
    </>
  );
}

export default FolderOption;
