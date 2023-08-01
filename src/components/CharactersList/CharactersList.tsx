import "./CharactersList.css";

const CharactersList = (): React.ReactElement => {
  const testsArrayForTeamPurposes = [1, 2, 4, 5];

  return (
    <ul className="characters-list">
      {testsArrayForTeamPurposes.map((test) => (
        <li key={test} className="character-list_character">
          {test}
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;
