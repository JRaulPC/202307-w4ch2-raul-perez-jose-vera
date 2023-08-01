import CharactersData from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharactersList.css";

interface CharacterListProps {
  charactersList: CharactersData[];
}

const CharactersList = (
  charactersList: CharacterListProps,
): React.ReactElement => {
  return (
    <ul className="characters-list">
      {charactersList.charactersList.map((character, i) => {
        return (
          <li key={i}>
            <CharacterCard character={character} />
          </li>
        );
      })}
    </ul>
  );
};

export default CharactersList;
