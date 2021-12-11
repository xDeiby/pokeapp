import styled from "styled-components";

export const PokeSectionStyle = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
`;

export const ContainerSections = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0 10px;
`;

export const SectionTitle = styled.ul<{ active: boolean }>`
  flex: 1 1 0;
  text-align: center;
  font-weight: 600;
  ${(pr) => pr.active && `border-bottom: solid 2px #ff5f15`};
`;

export const SectionContent = styled.div`
  display: grid;
  padding: 20px;
  heigh: 200px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
