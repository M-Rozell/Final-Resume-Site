
import React, { useState, useEffect } from 'react'
import "../../css/Dicey.css"
import { Dice } from './dice'


export const Dicey = ({ closeModal, openBtn, number, resetNumber }) => {

    const handleDiceyClose = () => {
        closeModal(false)
        openBtn(true)
    }

    const [newDie, setNewDie] = useState([])

    const handleNewDie = () => {
        setNewDie(arr => [...arr, `${arr.length}`])
        console.log(newDie)
    }

    const handleReroll = () => {
    }




    return (
        <div className='diceyContainer'>
            <button onClick={() => { handleDiceyClose() }}>Close</button>
            <div className='btnContainer'>

                <button className='newDie'
                    onClick={() => handleNewDie()}
                >New Die</button>

                <button className='rerollDie' onClick={() => handleReroll()}>Reroll Die</button>

                <button className='sumDie'>Sum Die</button>

            </div>

            <div className='diceContainer'>



                {newDie.map(() =>
                    <div> <Dice /> </div>)}



            </div>


        </div>
    )
}

export default Dicey;
