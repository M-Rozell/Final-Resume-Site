
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../css/rAndMBootstrap.css';
import Navbar from "./Navbar";
import LinkComponent from './LinkComponent';
import axios from "axios";

const Location = () => {

    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(10)

    useEffect(() => {
        const fetchLocation = async () => {
            setLoading(true);
            const res = await axios.get('https://rickandmortyapi.com/api/location');
            setLocation(res.data);
            setLoading(false);
        }
        fetchLocation();
    }, []);

    console.log(location)

    return (

        <div id="locationContainer">

            <div className='rAndMCloseBtn'>
                <LinkComponent />
            </div>

            <Navbar />


            <section className=" mt-5 mb-5 d-flex justify-content-center">
                <div className="col-md-6 ">
                    {/* <ul className="list-group ">
                        {location.map(location => (
                            <li
                                key={`location=${location.id}`}
                                className="list-group-item align-items-center shadow rounded text-center">
                                <h2 className="card-title">{location.name}</h2>
                                <h6 className="card-subtitle mt-2">Type: {location.type}</h6>
                                <h6 className="card-subtitle mt-1">Dimension: {location.dimension}</h6>
                                <Link to={`/location/${location.id}`} className="btn btn-outline-success mt-2">
                                    Residents
                                </Link>
                            </li>
                        ))}
                    </ul> */}
                </div>
            </section>

        </div>

    )
};

export default Location;


