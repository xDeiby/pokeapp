import styled from "styled-components";

export const PokemonStyledInfo = styled.div`
  display: flex;
  background: linear-gradient(#ff5f15 10%, white 100%);
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.5);
`;

export const HeaderCard = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImage = styled.figure`
  padding: 20px;
  border-radius: 100%;
  overflow: hidden;
  background-color: white;
  border: solid 4px #253238;
`;
export const PokemonImage = styled.img`
  width: 150px;
  object-fit: cover;
  background-color: white;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CardTitle = styled.h1<{
  size?: number;
  color?: string;
  addText?: string;
}>`
  color: #253238;
  text-transform: capitalize;
  ${(pr) => pr.size && `font-size: ${pr.size}rem`};
  ${(pr) => pr.color && `color: ${pr.color}`};
`;

export const EXP = styled.div`
  width: 90%;
  color: white;
  background-color: #62d162;
  border-radius: 20px;
  text-align: center;
`;
