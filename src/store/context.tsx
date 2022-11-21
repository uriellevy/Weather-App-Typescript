import React, { createContext, useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from '../constants/apiConsts';
import { localStorageServices } from '../services/localStorage';



export const WeatherContext = createContext<any>(null);
//todo move to redux

export const WeatherProvider = (props: any) => {
    const [cityInput, setCityInput] = useState(localStorageServices.getCityInput || "tel aviv");
    const [currentCityDescription, setCurrentCityDescription] = useState([])
    const [currentCityData, setCurrentCityData] = useState({});
    const [fiveDaysForcastData, setFiveDaysForcastData] = useState([])

    const getCityNumber = async (cityName: string) => {
        const res = await fetch(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`);
        const data = await res.json();
        return data[0];
    };

    const getCurrentWeather = async (cityNumber:number) => {
        const res = await fetch(`${BASE_URL}/forecasts/v1/daily/1day/${cityNumber}?apikey=${API_KEY}`);
        const data = await res.json();
        setCurrentCityData(data.DailyForecasts[0]);
    }

    const getFiveDaysForcast = async (cityNumber:number) => {
        const res = await fetch(`${BASE_URL}/forecasts/v1/daily/5day/${cityNumber}?apikey=${API_KEY}`);
        const data = await res.json();

        setFiveDaysForcastData(data)
        console.log(fiveDaysForcastData)
    }

    // getCityNumber(cityInput);

    useEffect(() => {
        getCityNumber(cityInput).then((data) => {
            setCurrentCityDescription(data)
            return getCurrentWeather(data.Key);
        })
    }, [cityInput])

    



    


    const value = {
        cityInput,
        setCityInput,
        currentCityData,
        setCurrentCityData,
        currentCityDescription,
        setCurrentCityDescription,
    };

    return (
        <WeatherContext.Provider value={value}>
            {props.children}
        </WeatherContext.Provider>
    )

}

