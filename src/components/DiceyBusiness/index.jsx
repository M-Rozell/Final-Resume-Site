
import React, { useState } from "react";
import { DieNumbers } from "./DieNumbers";
import "../../css/Dicey.css";


export const Dicey = ({ closeModal, openBtn }) => {

  const [newDie, setNewDie] = useState([]);

  //Array of dice Numbers
  // useEffect(() => {
  //   console.log(newDie);
  // }, [newDie]);


  //Close Button
  const handleDiceyClose = () => {
    closeModal(false);
    openBtn(true);
  };


  //New Dice Roll
  const handleNewDie = () => {
    const randomDieNumber = Math.floor(Math.random() * 6) + 1;
    setNewDie([...newDie, randomDieNumber]);
  };


  //Sum of Displayed Dice
  const handleSum = () => {
    const sumDie = newDie.reduce((result, number) => result + number);
    alert(`The sum of all the dice is ${sumDie}`);
  };


  //Reroll all Displayed Dice
  const handleReroll = () => {
    const newDieNumbers = newDie.map(() => Math.floor(Math.random() * 6) + 1)
    setNewDie(newDieNumbers)
  };



  return (
    <div className="diceyContainer">
      <button
        onClick={() => {
          handleDiceyClose();
        }}
      >
        Close
      </button>
      <div className="btnContainer">
        <button className="newDie" onClick={() => handleNewDie()}>
          New Die
        </button>

        <button className="rerollDie" onClick={() => handleReroll()}>
          Reroll Die
        </button>

        <button className="sumDie" onClick={() => handleSum()}>
          Sum Die
        </button>
      </div>
      <ul className="diceContainer">

        {newDie.map((num, i) => (
          <li key={i} className="dice">
            <DieNumbers num={num} />
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Dicey;
