import { render, screen } from "@testing-library/react";
import Character from "../../types";
import CharacterCard from "./CharacterCard";

describe("Given a CharacterCard component", () => {
  describe("When it receives a Character with the name 'Luke Skywalker'", () => {
    test("Then it should show 'Luke Skywalker' inside a heading", () => {
      const character: Character = {
        id: 1,
        name: "Luke Skywalker",
        imgUrl: "",
        height: "",
        mass: "",
        created: "",
      };

      render(<CharacterCard character={character} />);

      const characterName = screen.getByRole("heading", {
        name: "Luke Skywalker",
      });

      expect(characterName).toBeInTheDocument();
    });
  });
});
