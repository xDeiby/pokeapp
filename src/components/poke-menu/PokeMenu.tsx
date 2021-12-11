import { PokeFigure, PokeImage, PokeMenuStyle } from "./PokeMenu.style";
import PokeLogo from "../../assets/pokemon.png";

export default function PokeMenu() {
  return (
    <PokeMenuStyle>
      <PokeFigure to={"/"}>
        <PokeImage src={PokeLogo} />
      </PokeFigure>
    </PokeMenuStyle>
  );
}
