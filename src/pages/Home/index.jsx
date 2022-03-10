import { useEffect } from "react";
import { useState } from "react";
import { getCurrentWeather } from "../../services/httpService/getCurrentWeather";

import { BsThermometerSun } from "react-icons/bs";
import "./Home.scss";
import Section from "../../components/Section";

function Home() {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentWeather()
      .then((res) => {
        setLocation(res.location);
        setWeather(res.current);
      })
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
                <h3>
                  {location.country}, {location.name}
                </h3>
              </span>
            </div>
            <div className="current_condition">
              <img
                src={weather.condition.icon}
                alt={`${weather.condition.text} icon`}
              />
              <span>{weather.condition.text}</span>
            </div>
            <div>
              <span className="current_thermo">
                <BsThermometerSun />
              </span>
              <span>
                <span className="current_number">{weather.temp_c}</span>C /{" "}
                <span className="current_number">{weather.temp_f}</span>F
              </span>
            </div>
            <div className="current_info">
              <span>
                humid:{" "}
                <span className="current_number">{weather.humidity}</span>%
              </span>
              <span>
                cloud: <span className="current_number">{weather.cloud}</span>%
              </span>
            </div>
          </div>
        );
      } else {
        component = <p>failed to fetch data</p>;
      }
    }

    return component;
  };

  return <Section>{getComponent()}</Section>;
}

export default Home;
