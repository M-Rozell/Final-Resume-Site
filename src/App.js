
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHome from "./pages/MainHome";
import React from 'react';



const App = () => {

    return (

        <BrowserRouter>
        <Routes>

            <Route path="/" element={<MainHome />} />
            

        </Routes>
    </BrowserRouter>

    )

}






export default App;