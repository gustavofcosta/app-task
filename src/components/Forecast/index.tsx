import { useState, useEffect } from "react";
import { Loading } from "../../styles/GlobalStyles";

import { Temperature } from "./styled";
import { useGlobalContext } from "../../context/appContext";

const Forecast = () => {
  const { forecast, isLoading, location, getForecast } = useGlobalContext();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getForecast(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  if (isLoading) {
    return (
      <Loading>
        <div className="loading"></div>
      </Loading>
    );
  }

  if (!location) {
    return (
      <div className="alert alert-danger">
        Aceite ao acesso a localização para ver a temperatura
      </div>
    );
  }

  return (
    <Temperature>
      <figure>
        <img
          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          alt={forecast.weather[0].description}
        />
        <div>
          {forecast.main.temp.toFixed()}ºc
          <span> {forecast.weather[0].description}</span>
        </div>
      </figure>
      <div>
        {forecast.name}, {forecast.sys.country}
      </div>
    </Temperature>
  );
};

export default Forecast;
