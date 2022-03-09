import { useEffect } from "react";
import { useState } from "react";
import { getCurrentWeather } from "../../services/httpService/getCurrentWeather";

import { BsThermometerSun } from "react-icons/bs";
import "./current.scss";

function Current() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentWeather()
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const getComponent = () => {
    let component = <p>loading...</p>;
    if (!isLoading) {
      if (weather) {
        component = (
          <div className="current_container">
            <div>
              <span>
                {weather.location.country} / {weather.location.name}
              </span>
            </div>
            <div className="current_condition">
              <img
                src={weather.current.condition.icon}
                alt={`${weather.current.condition.text} icon`}
              />
              <span>{weather.current.condition.text}</span>
            </div>
            <div>
              <BsThermometerSun />
              <span>
                {weather.current.temp_c}C / {weather.current.temp_f}F
              </span>
            </div>
            <div className="current_info">
              <span>humidity: {weather.current.humidity}%</span>
              <span>cloud: {weather.current.cloud}%</span>
            </div>
          </div>
        );
      } else {
        component = <p>failed to catch data</p>;
      }
    }

    return component;
  };

  return getComponent();
}

export default Current;
