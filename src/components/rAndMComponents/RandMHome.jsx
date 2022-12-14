
import '../../css/rAndMBootstrap.css';
import Navbar from "./Navbar";
import React from "react";
import LinkComponent from './LinkComponent';
import Logo from '../../images/rick.png'
import Character from './Character';


const RandMHome = () => {

    return (
        <div id="homeContainer">
            <div className="rAndMHomeBG">

                <div className='rAndMCloseBtn'>
                    <LinkComponent />
                </div>
                <header>
                    <main className="container-md ">
                        <div className="card col md-6 bg-transparent border-0">
                            <div className="card-body ">
                                <div className='rAndMLogos d-flex flex-column align-items-center'>
                                    <img src={Logo} className="logo"></img>
                                    <form>
                                       {/* <label className='form-label text-light m-2'>Name</label>  */}
                                    <input className='mt-5 text-dark' type="search" name="characterName" id="" placeholder='Search for a character'/>
                                </form>
                                </div>
                            </div>

                        </div>

                    </main>
<Character />

                </header>


                {/* <main className="container mt-5 justify-content-center">
                    <div className="card col md-6 text-center">
                        <div className="card-body shadow rounded">
                            <h3 className="card-title">Rick and Morty Routing Lab</h3>
                            <p className="card-text">
                                Welcome to my React Routing Lab using The Rick and Morty API.
                                This is like a mini IMDB for the Rick and Morty animated series. I
                                use React, useState and useEffect hooks, along with Fetch, a REST API,
                                Bootstrap, and React Router to build this project. Use the
                                navbar to click around to find characters, locations, episodes, and more. Enjoy!
                            </p>
                            <a href="mailto:maggiemagnum@gmail.com" className="card-link" id="emailLink">maggiemagnum@gmail.com</a>
                        </div>
                    </div>
                </main> */}
            </div>
        </div>
    )
};

export default RandMHome;








