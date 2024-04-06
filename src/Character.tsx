import { graphql, useFragment } from "react-relay";
import { CharacterFragment$key } from "./__generated__/CharacterFragment.graphql";

const characterFragment = graphql`
  fragment CharacterFragment on Character {
    name
    species
    image
  }
`;

type Props = {
  character: CharacterFragment$key;
};

export default function Character(props: Props) {
  const character = useFragment(characterFragment, props.character);
  return (
    <li>
      <p>{character.name}</p>
      {character.image && <img src={character.image} alt={`Image of ${character.name}`} />}
    </li>
  );
}
