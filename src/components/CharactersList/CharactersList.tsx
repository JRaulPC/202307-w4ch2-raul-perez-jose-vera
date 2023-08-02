import Character from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharactersList.css";

interface CharacterListProps {
  charactersList: Character[];
}

const CharactersList = (
  charactersList: CharacterListProps,
): React.ReactElement => {
  return (
    <ul className="characters-list">
      {charactersList.charactersList.map((character, id) => {
        return (
          <li key={id}>
            <CharacterCard character={character} />
          </li>
        );
      })}
    </ul>
  );
};

export default CharactersList;
