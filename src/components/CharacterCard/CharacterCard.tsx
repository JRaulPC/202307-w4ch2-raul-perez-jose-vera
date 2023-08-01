import { type CharacterData } from "../../data/types";

interface CharacterCardProps {
  characters: CharacterData;
}

const CharacterCard = ({
  characters: { name, imageUrl, height, mass, created },
}: CharacterCardProps): React.ReactElement => {
  return (
    <article>
      <h2>{name}</h2>
      <img src={imageUrl} alt={`${name} star wars character `} />
      <ul>
        <li>{height}</li>
        <li>{mass}</li>
        <li>{created}</li>
      </ul>
    </article>
  );
};

export default CharacterCard;
