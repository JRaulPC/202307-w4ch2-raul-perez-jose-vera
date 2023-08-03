import { useEffect, useState } from "react";
import Character from "../../types";
import Button from "../ButtonComponent/ButtonComponent";
import CharactersList from "../CharactersList/CharactersList";
import "./App.css";

const App = (): React.ReactElement => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://starwars-characters-api-dsef.onrender.com/characters",
      );
      const characterResponse = (await response.json()) as Character[];
      setCharacters([...characterResponse]);
    })();
  }, []);

  const resetHeight = () => {
    const resetCharactersHeight = characters.map((character) => ({
      ...character,
      height: "0",
    }));
    setCharacters(resetCharactersHeight);
  };

  return (
    <div className="app">
      <h1 className="title">STAR WARS CHARACTERS</h1>
      <div>
        <Button text="Reset Height" actionOnClick={resetHeight} />
      </div>
      <CharactersList charactersList={characters} />
    </div>
  );
};

export default App;
