import { useState } from "react";
import CharacterData from "../../types";
import Button from "../ButtonComponent/ButtonComponent";
import "./CharacterCard.css";

interface CharacterCardProps {
  character: CharacterData;
}

const CharacterCard = ({
  character: { id, name, height, mass, created },
}: CharacterCardProps): React.ReactElement => {
  const [massValue, setMassValue] = useState(mass);

  const incrementNumber = () => {
    setMassValue((massValue) => (massValue += 1));
  };

  const decrementNumber = () => {
    if (massValue === 0) {
      return;
    }
    setMassValue((massValue) => massValue - 1);
  };

  return (
    <article className="character">
      <h2 className="character-name">{name}</h2>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={`The Star Wars character of the ${name} of the first three movies`}
      />
      <ul className="character-atributes">
        <li>Altura: {height} Cm</li>
        <li>Peso: {massValue} Kg</li>
        <div className="container">
          <Button text="+" actionOnClick={incrementNumber} />
          <Button text="-" actionOnClick={decrementNumber} />
        </div>
        <li>It was created on {created.slice(0, 10)}</li>
      </ul>
    </article>
  );
};

export default CharacterCard;
