import CharacterData from "../../types";
import "./CharacterCard.css";

interface CharacterCardProps {
  character: CharacterData;
}

const CharacterCard = ({
  character: { name, height, mass, created },
}: CharacterCardProps): React.ReactElement => {
  return (
    <article className="character">
      <h2 className="character-name">{name}</h2>
      <ul className="character-atributes">
        <li>Altura: {height} Cm</li>
        <li>Peso: {mass} Kg</li>
        <li>It was created on {created}</li>
      </ul>
    </article>
  );
};

export default CharacterCard;
