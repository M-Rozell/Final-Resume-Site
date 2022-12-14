
import React, { useState, useEffect } from 'react'
import "../../css/Dicey.css"
import Roll from './Roll'


export const Dicey = ({ closeModal, openBtn }) => {

    const handleDiceyClose = () => {
        closeModal(false)
        openBtn(true)
    }

    const [newDie, setNewDie] = useState([])


    const handleNewDie = () => {
        setNewDie(newArr => [...newArr, newArr.length])
    }

    useEffect(() => {
        console.log(newDie)
    }, [newDie])


    const handleReroll = () => {
        
        setNewDie(newDie.forEach(element => {
            
        }))
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

            <ul className='diceContainer'>

                {newDie.map((id) =>
                    <li
                    key={id}
                    >
                        <Roll
                            
                        /></li>
                )}

            </ul>
        </div>
    )
}

export default Dicey;





