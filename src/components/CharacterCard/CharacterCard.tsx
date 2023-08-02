import React, { useState } from "react";
import CharacterData from "../../types";
import Button from "../ButtonComponent/ButtonComponent";
import "./CharacterCard.css";

interface CharacterCardProps {
  character: CharacterData;
}

const CharacterCard = ({
  character: { id, name, height, mass, created },
}: CharacterCardProps): React.ReactElement => {
  const [number, setNumber] = useState(0);
  const incrementNumber = () => {
    if (number === 500) {
      return;
    }
    setNumber((number: number) => number + 1);
  };

  const decrementNumber = () => {
    if (number === 0) {
      return;
    }
    setNumber((number: number) => number - 1);
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
        <li>Peso: {mass} Kg</li>
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
