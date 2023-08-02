import { useEffect, useState } from "react";
import CharactersData from "../../types";
import CharactersList from "../CharactersList/CharactersList";
import "./App.css";

const App = (): React.ReactElement => {
  const [characters, setCharacters] = useState<CharactersData[]>([]);

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
      <CharactersList charactersList={characters} />
    </div>
  );
};

export default App;
