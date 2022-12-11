import React, { useState, useEffect } from "react";
import "./CharactersHp.css";

const CharactersHp = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    try {
      fetch("https://harry-potter-api-en.onrender.com/characters")
        .then((response) => response.json())
        .then((data) => setCharacter(data.slice(0, 12)));
      setCharacter.charactersBd.slice(0, 12);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="containerHp">
      <h1 className="charactersTitleHp">Characters</h1>
      <div className="charactersHp">
        {character.map((item) => (
          <div className="cardCharacterHp" key={character.indexOf(item)}>
            <div className="imgCardHp">
              <img className="cardImgHp" src={item.image} alt={item.name} />
            </div>
            <div className="cardInfoHp">
              <h3 className="nameHp">{item.character}</h3>
              <h4 className="houseHp">House: {item.hogwartsHouse}</h4>
              <h4 className="actorHp">Portrayed by: {item.interpretedBy}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersHp;
