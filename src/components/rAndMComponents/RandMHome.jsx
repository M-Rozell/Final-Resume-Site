
import '../../css/rAndMBootstrap.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import LinkComponent from './LinkComponent';
import Logo from '../../images/rick.png'
import Character from './Character';
import '../../css/rAndMBootstrap.css';



const RandMHome = () => {




    const [data, setData] = useState({ results: [] }); //hooks depend on the order they are defined.
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [allCharacters, setAllCharacters] = useState(true);
    const [searchCharacters, setSearchCharacters] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        setSearch(query)
    }


    const searchCharacter = async () => {
        const result = await axios(`https://rickandmortyapi.com/api/character/?name=${query}`);
        setData(result.data);
    }

    useEffect(() => {
        searchCharacter();
    }, [search])

    const handleChange = (e) => {
        setQuery(e.target.value)
        setAllCharacters(false)
        setSearchCharacters(true)
    }

    const reload = () => {
        setAllCharacters(true)
        setSearchCharacters(false)
        setQuery("")
    }

    

    return (

        <div id="homeContainer">
            <div className="rAndMHomeBG">

                <div className='rAndMCloseBtn'>
                    <LinkComponent />
                </div>
                <div className='rAndMLogos d-flex flex-column align-items-center'>
                    <img src={Logo} className="logo" alt='Character'></img>
                </div>

                <form onSubmit={handleSubmit} className="text-center">
                    <input
                        type="text"
                        name=""
                        className='searchInput'
                        id="searchField"
                        value={query}
                        placeholder="Search for a character"
                        onChange={handleChange}
                    />

                </form>
                <div className='text-center mt-2'>
                    <button type='submit' className='resetBtn' onClick={reload}>Reset</button>
                </div>
                <section>

                    {searchCharacters &&
                        <div className='results'>
                            <div className="card d-flex justify-content-center cardTable">
                                <div className="col-sm-6">
                                    <ul>
                                        {data.results.map(item => (
                                            <li
                                                key={item.id}
                                                className=" d-flex list-group-item align-items-center shadow rounded text-left cardList"
                                            >
                                                <img src={item.image} className="card-image characterImage" alt={item.name} />

                                                <div className="card-body p-1 characterCards">
                                                    <h6 className="characterId">#{item.id}</h6>
                                                    <h2>{item.name}</h2>
                                                    <h6>{item.status} - {item.species} - {item.gender}</h6>
                                                    <p className=" lastLocation">Last Known Location:</p>
                                                    <h6>{item.location.name}</h6>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>}



                </section>
                {allCharacters && <Character />}

            </div>
        </div>
    )
};

export default RandMHome;








