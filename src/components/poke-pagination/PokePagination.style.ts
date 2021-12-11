import styled from "styled-components";

export const H1 = styled.li<{ active: boolean }>`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #263238;
  padding: 5px 15px;
  border-radius: 50px;
  cursor: pointer;

  ${(pr) =>
    pr.active &&
    `
    color: white;
    background-color: #ff5f15;
    
    `};
`;

export const ButtonPag = styled.button<{ dir: "right" | "left" }>`
  color: white;
  background-color: #ff5f15;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
  padding: 5px 20px;
  cursor: pointer;

  ${(pr) =>
    pr.dir === "right"
      ? `
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
  `
      : `border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      `};
`;

export const PokePaginationContainer = styled.ul`
  padding: 10px;
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: center;

  @media screen and (max-width: 700px) {
    ${ButtonPag}, ${H1} {
      font-size: 1rem;
    }
  }
`;
