
import React, {useEffect, useState} from 'react'
import { BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill, BsFillDice5Fill, BsFillDice6Fill } from 'react-icons/bs'

export default function Roll() {

    const [number, setNumber] = useState(Math.floor(Math.random() * 6) + 1)
    const [list, setList] = useState([])
  
  useEffect(() => {
    // setList(list.concat(number))  Same As...
    setList(list => [...list, number])
  },[])

    console.log(list)
  
    return (
    
    <div
    className='dice'
    >
        
        {number === 1
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
            }

    </div>
  )
}

