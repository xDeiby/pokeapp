import React, { ReactElement, useState } from "react";
import { IPokemon } from "../../../services/interfaces/IPokemonsResult";
import {
  ContainerSections,
  PokeSectionStyle,
  SectionContent,
  SectionTitle,
} from "./PokeSection.style";

interface Props {
  pokemon: IPokemon;
}

const sections = ["Stats", "Elements", "Abilities"];

export default function PokeSection({ pokemon }: Props): ReactElement {
  const [activeSecion, setActiveSection] = useState<string>(sections[0]);

  const onChangeSect = (section: string) => {
    setActiveSection(section);
  };

  return (
    <PokeSectionStyle>
      <ContainerSections>
        {sections.map((sect) => (
          <SectionTitle
            onClick={() => onChangeSect(sect)}
            active={sect === activeSecion}
            key={sect}
          >
            {sect}
          </SectionTitle>
        ))}
      </ContainerSections>

      <>
        {activeSecion === "Stats" && (
          <SectionContent>
            {pokemon.stats.map((stat) => (
              <p>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </SectionContent>
        )}
        {activeSecion === "Elements" && (
          <SectionContent>
            {pokemon.types.map((type) => (
              <p>elemento: {type.type.name}</p>
            ))}
          </SectionContent>
        )}
        {activeSecion === "Abilities" && (
          <SectionContent>
            {pokemon.abilities.map((ab) => (
              <p>habilidad: {ab.ability.name}</p>
            ))}
          </SectionContent>
        )}
      </>
    </PokeSectionStyle>
  );
}
