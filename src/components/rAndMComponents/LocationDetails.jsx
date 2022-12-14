
import { Link, useParams } from "react-router-dom";
import '../../css/rAndMBootstrap.css';
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LinkComponent from "./LinkComponent";


const LocationDetails = () => {

    const { locationid } = useParams();
    const { characterid } = useParams();

    const [details, setDetails] = useState(null);
    const [tesidents, setResidents] = useState(null)




    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${locationid}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data.residents)
                console.log(data.residents)
            })
            .catch(e => alert(e.message))
    }, [locationid]);




    return (
        <div id="locationDetailsContainer">

            <div className='rAndMCloseBtn '>
                <LinkComponent />
            </div>

            <Navbar />

            <section className=" mt-5 mb-5 d-flex justify-content-center">
                <div className="col-md-6 ">

                    <ul className="list-group ">
                        {/* {details && details.map((character) => (

    <li key={`character=${character.id}`}>
        
        <h3>{character.name}</h3>
    </li>
))} */}
                    </ul>
                </div>

            </section>


        </div>

    )






    // <div id="peopleDetailsApp">

    //     <div className='rAndMCloseBtn '>
    //         <LinkComponent />
    //     </div>

    //     <Navbar />

    //     <section className=" mt-5 mb-5 d-flex justify-content-center">
    //         <div className="col-md-6 ">
    //             <ul className="list-group ">
    //                 {character.map(character => (
    //                     <li
    //                         key={`character=${character.id}`}
    //                         className="list-group-item align-items-center shadow rounded text-center">
    //                         <h3>{character.name}</h3>
    //                         <div>{character.status}</div>
    //                         <Link to={`/character/${character.id}`} className="btn btn-outline-success m-2">
    //                             Full Details
    //                         </Link>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     </section>
    // </div>

};

export default LocationDetails;
