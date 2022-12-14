
import React from 'react';
import MainHome from "./pages/MainHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RandMHome from "./components/rAndMComponents/RandMHome";
import Character from "./components/rAndMComponents/Character";
import CharacterDetails from "./components/rAndMComponents/CharacterDetails";
import Location from "./components/rAndMComponents/Location";
import LocationDetails from './components/rAndMComponents/LocationDetails';


const App = () => {

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/maggie-rozell" element={<MainHome />} />

                <Route path="/RandMHome" element={<RandMHome />} />
                <Route path="/Character" element={<Character />} />
                <Route path="/Character/:characterid" element={<CharacterDetails />} />
                <Route path="/Location" element={<Location />} />
                <Route path="/Location/:locationid" element={<LocationDetails />} />



            </Routes>
        </BrowserRouter>
    )
};

export default App;









