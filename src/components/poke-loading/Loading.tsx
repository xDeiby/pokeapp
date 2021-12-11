import { ReactElement } from "react";
import styled from "styled-components";
import PokeGif from "../../assets/loadingGif.gif";

interface Props {
  children: ReactElement;
  isLoading: boolean;
}

const LoadingImage = styled.img`
  max-width: 700px;
  width: 100%;
  display: block;
  margin: auto;
`;

export default function Loading({ children, isLoading }: Props) {
  return <>{isLoading ? <LoadingImage src={PokeGif} /> : { ...children }}</>;
}
