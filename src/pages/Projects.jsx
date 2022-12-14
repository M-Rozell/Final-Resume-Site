
import WeatherModal from '../components/WeatherModal';
import TaskModal from '../components/TaskModal';
import { useNavigate } from 'react-router-dom';
import TTTModal from '../components/TTTModal';
import React, { useState } from 'react';
import '../css/rAndMBootstrap.css';
import '../css/Projects.css';

import Dicey from '../components/DiceyBusiness';

const Projects = () => {

  const navigate = useNavigate();
  const [tttmodal, setTTTModal] = useState(false);
  const [task, setTask] = useState(false);
  const [weatherBtn, setWeatherBtn] = useState(false);
  const [diceyBtn, setDiceyBtn] = useState(false)

  const [btn, setBtn] = useState(true);

  const navigateToGhibliHome = () => {
    navigate('/RandMHome');
  };

  const handleTTTBtn = () => {
    setTTTModal(true)
    setBtn(false)
  };

  const handleTaskBtn = () => {
    setTask(true)
    setBtn(false)
  };

  const handleWeatherBtn = () => {
    setWeatherBtn(true)
    setBtn(false)
  };

  const handleDicyBtn = () => {
    setDiceyBtn(true)
    setBtn(false)
    
  }


  return (

    <div className='projectsContainer' id='Projects'>
      <div className='projectsTitle'>PROJECTS</div>

      <div className='projectsModalContent'>

        <div className='projectsBtns'>
          {btn && <button className='tttBtn' onClick={() => { handleTTTBtn() }}>Tic Tac Toe</button>}
          {btn && <button className='taskBtn' onClick={() => { handleTaskBtn() }}>Task Compiler</button>}
          {btn && <button className='weatherBtn' onClick={() => { handleWeatherBtn() }}>Weather App</button>}
          {btn && <button className='bootstrapBtn' onClick={navigateToGhibliHome}>Bootstrap Ghibli</button>}
          
          {btn && <button className='dicy' onClick={handleDicyBtn}>Dicey</button>}
        
        </div>

        <div className='projectModals'>
          {tttmodal && <TTTModal closeModal={setTTTModal} openBtn={setBtn} />}
          {task && <TaskModal closeModal={setTask} openBtn={setBtn} />}
          {weatherBtn && <WeatherModal closeModal={setWeatherBtn} openBtn={setBtn} />}

        {diceyBtn && <Dicey closeModal={setDiceyBtn} openBtn={setBtn}/>}

        </div>
      </div>
    </div>
  )
};

export default Projects;