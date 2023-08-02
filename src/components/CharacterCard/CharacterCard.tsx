import CharacterData from "../../types";
import "./CharacterCard.css";

interface CharacterCardProps {
  character: CharacterData;
}

const CharacterCard = ({
  character: { id, name, height, mass, created },
}: CharacterCardProps): React.ReactElement => {
  return (
    <article className="character">
      <h2 className="character-name">{name}</h2>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={`The Star Wars character of the ${name} of the first three movies`}
      />
      <ul className="character-atributes">
        <li>Altura: {height} Cm</li>
        <li>Peso: {mass} Kg</li>
        <li>It was created on {created.slice(0, 10)}</li>
      </ul>
    </article>
  );
};

export default CharacterCard;
