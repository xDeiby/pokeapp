import { Github } from "@styled-icons/bootstrap";
import styled from "styled-components";

const StyledFooterContainer = styled.footer`
  height: 100px;
  border-top: #ff5f15 1px solid;
  margin-top: 20px;
  color: #ff5f15;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 200;
`;

export default function Footer() {
  return (
    <StyledFooterContainer>
      <a href="https://github.com/xDeiby">
        <Github style={{ color: "#ff5f15" }} width={30} />
      </a>
      © 2021 Deiby Cabrera, All rigths reserved
    </StyledFooterContainer>
  );
}
