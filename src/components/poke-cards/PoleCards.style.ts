import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 40px 0;
`;

export const PokemonElement = styled(Link)`
  text-decoration: none;
  color: #ff5f15;
  font-size: 1.3rem;
  font-weight: 600;
  background-color: #fafafa;
  width: 100%;
  border-radius: 20px;
  padding: 10px;
  text-transform: capitalize;
  box-shadow: 0 0 5px #ff5f15;
  position: relative;
  cursor: pointer;
  ::after {
    content: "Ver Pokemon";
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ff5f15;
    top: 0;
    left: 0;
    clip-path: inset(0 100% 0 0);
    transition: clip-path 0.3s;
  }

  :hover::after {
    clip-path: inset(0 100% 0 100%);
  }
`;
