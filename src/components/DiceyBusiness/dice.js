

import React, { useState, useEffect } from 'react'
import { BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill, BsFillDice5Fill, BsFillDice6Fill } from 'react-icons/bs'



export const Dice = () => {

    const id = Math.floor(Math.random() * 10000)

    const [number, setNumber] = useState(Math.floor(Math.random() * 6) + 1)

    // useEffect(() => {
        
    //     setNumber(Math.floor(Math.random() * 6) + 1)

    // }, [])

    return (
        <div className='dice'
        resetNumber={setNumber}
            key={id}
        >{number === 1
            ? <BsFillDice1Fill />
            : (number === 2
                ? <BsFillDice2Fill />
                : (number === 3
                    ? <BsFillDice3Fill />
                    : (number === 4
                        ? <BsFillDice4Fill />
                        : (number === 5
                            ? <BsFillDice5Fill />
                            : <BsFillDice6Fill />

                        )
                    )
                )
            )
            }</div>
    )
}



