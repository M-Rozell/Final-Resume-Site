import React from "react";

const CharacterCard = ({ character, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return(

  <ul >
    {character.map((character) => (
        
      <li
        key={`character=${character.id}`}
        className="card d-flex list-group-item align-items-center shadow rounded text-left cardList"
      >
        <img src={character.image} className="card-image characterImage" alt={character.name}/>
        
        <div className="card-body p-0 ml-2 characterCards">
        <h6 className="characterId">#{character.id}</h6>
        <h2>{character.name}</h2>
        <h6>{character.status} - {character.species} - {character.gender}</h6>
        <p className=" lastLocation">Last Known Location:</p>
        <h6>{character.location.name}</h6>
      </div>
      </li>
    ))}
  </ul>)
};

export default CharacterCard;
