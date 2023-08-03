import { render, screen } from "@testing-library/react";
import Character from "../../types";
import CharacterCard from "./CharacterCard";

describe("Given a CharacterCard component", () => {
  describe("When it receives a Character with the name 'Luke Skywalker'", () => {
    const character: Character = {
      id: 1,
      name: "Luke Skywalker",
      imgUrl: "",
      height: 5,
      mass: "",
      created: "",
    };

    test("Then it should show 'Luke Skywalker' inside a heading", () => {
      render(<CharacterCard character={character} />);

      const characterName = screen.getByRole("heading", {
        name: "Luke Skywalker",
      });

      expect(characterName).toBeInTheDocument();
    });

    test("Then it should show 'The Star Wars character Luke Skywalker, of the first three movies' as alt image", () => {
      render(<CharacterCard character={character} />);

      const imageAlt = screen.getByAltText(
        "The Star Wars character Luke Skywalker, of the first three movies",
      );

      expect(imageAlt).toBeInTheDocument();
    });
  });
});
