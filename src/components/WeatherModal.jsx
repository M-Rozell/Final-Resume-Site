
import { AiOutlineCloseCircle } from 'react-icons/ai';
import React, { useState } from "react";
import '../css/WeatherModal.css';
import axios from "axios";
import { format } from 'date-fns';


function WeatherModal({ closeModal, openBtn }) {

    const handleCloseWeatherModal = () => {
        closeModal(false)
        openBtn(true)
    };

    const [data, setData] = useState({});

    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bdb95c6b9964e1a35c7b8cb3c7a548c7`;

    const search = (e) => {
        if (e.key === 'Enter') {
            axios.get(url).then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            setLocation('')
        }
    };

    return (

        <div className="weatherAppContainer">

            <div className="weatherApp">
                <div className='weatherCloseBtn '>
                    <button onClick={() => handleCloseWeatherModal()}><AiOutlineCloseCircle /></button>
                </div>

                <div className="topContainer">

                    <div className="search">
                        <input value={location} onChange={e => setLocation(e.target.value)} type='text' placeholder="Location" onKeyPress={search} />
                        <div className="day">{format(new Date(), 'MMMM do yyyy, h:mm aaa')}</div>
                    </div>
                </div>

                <div className="weatherContainer">
                    <div className="top">
                        <div className="location"><p className="paraLocation">{data.name}</p></div>
                        <div className="temp">{data.main ? <h1 className="tempHone">{data.main.temp.toFixed()}°F</h1> : null}</div>
                        <div className="skyBox">
                            <div className="weatherIcon">{data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="A Beautiful Sunny Day"></img> : null}</div>
                            <div className="sky">{data.weather ? <p className="paraSky">{data.weather[0].main}</p> : null}</div>
                        </div>
                    </div>

                    {data.name !== undefined &&
                        <div className="middle">
                            <div className="feelsLike">{data.main ? <p className="para">{data.main.feels_like.toFixed()}°F <br />Feels Like</p> : null}</div>
                            <div className="humidity">{data.main ? <p className="para">{data.main.humidity}% <br />Humidity</p> : null}</div>
                            <div className="wind"><p className="para">{data.wind.speed.toFixed()}mph<br />Wind</p></div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
};

export default WeatherModal;