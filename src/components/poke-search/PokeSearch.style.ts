import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokeSearchContainer = styled.div`
  padding: 20px 0;
  width: 70%
  margin: auto;
  text-align: center;
  position: relative;
  `;
export const Suggest = styled.div`
  box-shadow: 2px 2px 20px black rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  border: 2px solid #d5d5d5;
  /* height: 100px; */
  position: absolute;
  width: 100%;
  background-color: white;
  top: 80px;
  left: 0;
  height: 80px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  transition: transform 0.3s;
  transform-origin: top center;
  z-index: 100;
`;

export const PokeInput = styled.input`
  /* display: block; */
  font-size: 1.3rem;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #d5d5d5;
  display: inline-block;
  max-width: 800px;
  width: 90%;
  transition: max-width 0.2s;

  text-align: center;
  :focus {
    outline: none;
    border: 2px solid #ff5f15;
    color: red;
    max-width: 100%;

    + ${Suggest} {
      transform: scale(1);

    }
  }

  }
`;

export const PokemonPreviewContainer = styled(Link)`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  gap: 10px;
  border-radius: inherit;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #ff5f15;
  }
`;

export const PreviewTitle = styled.h1`
  flex: 1 1 0;
  color: black;
  font-size: 1rem;
  text-align: left;
`;
