import { useLazyLoadQuery, graphql } from "react-relay";
import { HomePageQuery } from "./__generated__/HomePageQuery.graphql";
import Character from "./Character";

const homeQuery = graphql`
  query HomePageQuery {
    characters {
      results {
        id
       ...CharacterFragment
      }
    }
  }
`;

export default function Home() {
  const data = useLazyLoadQuery<HomePageQuery>(homeQuery, {})

    const characters = data.characters?.results;

  return (
    <div>
      <ul>
        {characters?.map(character => (
          character ? <Character key={character.id} character={character} /> : null
        ))}
      </ul>
    </div>
  );
}
