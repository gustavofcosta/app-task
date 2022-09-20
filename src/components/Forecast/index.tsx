import { useState, useEffect } from "react";
import { Loading } from "../../styles/GlobalStyles";

import axios from "axios";
import { Temperature } from "./styled";
import { useGlobalContext } from "../../context/appContext";

const Forecast = () => {
  const { forecast, getLocation, isLoading, location } = useGlobalContext();

  useEffect(() => {
    getLocation();
  }, []);

  if (isLoading) {
    return (
      <Loading>
        <div className="loading"></div>
      </Loading>
    );
  }

  if (!location) {
    return <div>Por favor aceite a</div>;
  }

  return (
    <Temperature>
      <figure>
        <img
          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          alt={forecast.weather[0].description}
        />
        <div>
          {forecast.main.temp}ºc
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
