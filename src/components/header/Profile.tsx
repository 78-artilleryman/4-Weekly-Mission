import { UserType } from "@/src/interface/types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Image = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const UserEmail = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 767px) {
    display: none;
  }
`;

function Profile({ user }: { user: UserType }) {
  return (
    <Container>
      <Image src={user?.image_source} alt="user_logo" />
      <UserEmail>{user?.email}</UserEmail>
    </Container>
  );
}

export default Profile;
