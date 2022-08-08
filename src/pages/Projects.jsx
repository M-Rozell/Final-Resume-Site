import WeatherModal from '../components/WeatherModal';
import { TbArrowBigUpLines } from "react-icons/tb"
import TaskModal from '../components/TaskModal';
import { useNavigate } from 'react-router-dom';
import TTTModal from '../components/TTTModal';
import React, { useState, useEffect } from 'react';
import '../css/BootstrapGhibli.css';
import '../css/Projects.css'

const Projects = () => {

  const navigate = useNavigate();
  const [tttmodal, setTTTModal] = useState(false);
  const [task, setTask] = useState(false);
  const [weatherBtn, setWeatherBtn] = useState(false);

  const navigateToGhibliHome = () => {
    navigate('/GhibliHome');
  };

  return (
    <div className='projectsContainer' id='Projects'>
      <div className='projectsTitle'>Projects</div>


      
        <div className='projectsBtns'>
          <button className='tttBtn' onClick={() => { setTTTModal(true) }}>Tic Tac Toe</button>
          <button className='taskBtn' onClick={() => { setTask(true) }}>Task Compiler</button>
          <button className='weatherBtn' onClick={() => { setWeatherBtn(true) }}>Weather App</button>
          <button className='bootstrapBtn' onClick={navigateToGhibliHome}>Bootstrap Ghibli</button>
        </div>
        
        <div className='projectModals'>
          <div className='ticTacToeDiv'>
          {tttmodal && <TTTModal closeModal={setTTTModal} />}
          </div>
         
          {task && <TaskModal closeModal={setTask} />}
          {weatherBtn && <WeatherModal closeModal={setWeatherBtn} />}
        </div>
      </div>
    
  )
}

export default Projects