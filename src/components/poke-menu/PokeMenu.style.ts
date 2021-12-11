import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokeMenuStyle = styled.nav`
  height: 50px;
  width: 100%;
  margin-bottom: 50px;
  background-color: #ff5f15;
  text-align: center;
`;

export const PokeFigure = styled(Link)`
  tex-decoration: none;
  background: white;
  display: inline-block;
  padding: 10px;
  border-radius: 100%;
  cursor: pointer;
`;
export const PokeImage = styled.img`
  display: inline-block;
  width: 150px;
`;
