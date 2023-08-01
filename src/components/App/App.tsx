import { useEffect, useState } from "react";
import CharactersData from "../../types";

const App = (): React.ReactElement => {
  const [characters, setCharacters] = useState<CharactersData[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://starwars-characters-api-dsef.onrender.com/characters",
      );
      const characterResponse = (await response.json()) as CharactersData[];
      setCharacters([...characterResponse]);
      characters[0];
    })();
  }, [characters]);

  return <div className="app"></div>;
};

export default App;
