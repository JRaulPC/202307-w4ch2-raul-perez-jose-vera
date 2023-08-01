import { useEffect, useState } from "react";
import CharactersData from "../../types";
import CharactersList from "../CharactersList/CharactersList";

const App = (): React.ReactElement => {
  const [, setCharacters] = useState<CharactersData[]>([]);
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
      <CharactersList />
    </div>
  );
};

export default App;
