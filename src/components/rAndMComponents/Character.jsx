
// import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../css/rAndMBootstrap.css';
import Navbar from "./Navbar";
import LinkComponent from "./LinkComponent";
// import axios from "axios";
import CharacterFetch from "./CharacterFetch";
import Pagination from "./Pagination";



const Character = () => {

    const [character, setCharacter] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage, setCharactersPerPage] = useState(5);

    const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //     const fetchCharacters = async () => {
    //         setLoading(true);
    //         const res = await axios.get("https://rickandmortyapi.com/api/character");
    //         setCharacters(res.data);
    //         setLoading(false);
    //     }
    //     fetchCharacters();
    // },[])

    // useEffect(() => {
    //     fetch(`https://rickandmortyapi.com/api/character/`)
    //         .then(res => res.json())
    //         .then(data => {setCharacter(data.results)
    //         console.log(data.results)
    //         })

    //         .catch(e => alert(e.message))
    // }, []); 
    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/character");
    }, []);

    const fetchData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setCharacter((_character) => {
            return [..._character, ...data.results];
        });
        setLoading(false)
        if (data.info && data.info.next) {
            fetchData(data.info.next);
        }
    }


    //get index of last character
    const indexOfLastCharacter = currentPage * charactersPerPage; //current page multiplied by characters per page.
    //index of first character
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage //index of the last character and subtract characters per page.
    //current characters
    const currentCharacter = character.slice(indexOfFirstCharacter, indexOfLastCharacter); //slice out the number of characters we want.

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (

        <div id="characterContainer">

            {/* <div className='rAndMCloseBtn'>
                <LinkComponent />
            </div>

            <Navbar /> */}


            <div className=" mt-5 mb-5 card d-flex justify-content-center cardTable">
                <div className="col-sm-6">
                    <CharacterFetch 
                    character={currentCharacter} 
                    loading={loading} />
                    
                    <Pagination 
                    charactersPerPage={charactersPerPage} 
                    setCharactersPerPage={setCharactersPerPage}
                    totalCharacters={character.length} 
                    paginate={paginate} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </div>


    )
};
{/* <ul className="list-group ">
                        {character.map(character => (
                            <li
                                key={`character=${character.id}`}
                                className="list-group-item align-items-center shadow rounded text-center">
                                <h3>{character.name}</h3>
                                <div>{character.status}</div>
                                <Link to={`/character/${character.id}`} className="btn btn-outline-success m-2">
                                    Full Details
                                </Link>
                            </li>
                        ))}
                    </ul> */}
export default Character;







