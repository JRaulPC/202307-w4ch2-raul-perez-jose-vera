import { useEffect, useState } from "react";
import CharactersData from "../../types";
import Button from "../ButtonComponent/ButtonComponent";
import CharactersList from "../CharactersList/CharactersList";
import "./App.css";

const App = (): React.ReactElement => {
  const [characters, setCharacters] = useState<CharactersData[]>([]);

  const resetHeigt = () => {};

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://starwars-characters-api-dsef.onrender.com/characters",
      );
      const characterResponse = (await response.json()) as CharactersData[];
      setCharacters([...characterResponse]);
    })();
  }, []);

  return (
    <div className="app">
      <h1 className="title">STAR WARS CHARACTERS</h1>
      <Button text="Reset Height" actionOnClick={resetHeigt} />
      <CharactersList charactersList={characters} />
    </div>
  );
};

export default App;
