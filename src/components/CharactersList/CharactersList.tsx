import characters from "../../data/CharacterData";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharactersList.css";

const CharactersList = (): React.ReactElement => {
  return (
    <ul className="characters-list">
      <li className="character-list_character">
        <CharacterCard character={characters[0]} />
      </li>
    </ul>
  );
};

export default CharactersList;
