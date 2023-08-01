// import { useEffect } from "react";

// const Character = () => {
//   const [characterData, setCharacterData] = useState([]);

//   const getCharacterName = async () => {
//     const url = "https://starwars-characters-api-dsef.onrender.com/characters";

//     const response = await fetch(url);

//     try {
//       const responseJson = await response.json();
//       console.log(responseJson);
//       setCharacterData(responseJson.name);
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };

// useEffect(() => {
//   Character();
// }, []);

// return (
//   <>
//     characterData.map((character) => (

//     ))
//   </>

// )
