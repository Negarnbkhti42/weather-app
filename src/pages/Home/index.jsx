import { useEffect } from "react";
import { useState } from "react";
import { getCurrentWeather } from "../../services/httpService/getCurrentWeather";

import { BsThermometerSun } from "react-icons/bs";
import "./Home.scss";
import Section from "../../components/Section";
import ForecastCard from "../../components/ForecastCard";

function Home() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentWeather()
      .then((res) => {
        console.log(res);
        setWeather({ ...res });
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const getComponent = () => {
    let component = <p>loading...</p>;
    if (!isLoading) {
      if (weather) {
        component = (
          <>
            <Section>
              <div className="current_container">
                <div>
                  <span>
                    <h2>
                      {weather.location.country}, {weather.location.name}
                    </h2>
                  </span>
                </div>
                <div className="current_condition">
                  <img
                    src={weather.current.condition.icon}
                    alt={`${weather.current.condition.text} icon`}
                  />
                  <span>
                    <h3>{weather.current.condition.text}</h3>
                  </span>
                </div>
                <div>
                  <span className="current_thermo">
                    <BsThermometerSun />
                  </span>
                  <span>
                    <span className="current_number">
                      {weather.current.temp_c}
                    </span>
                    C
                  </span>
                </div>
                <div className="current_info">
                  <span>
                    humidity:{" "}
                    <span>
                      <span className="current_number">
                        {weather.current.humidity}
                      </span>
                      %
                    </span>
                  </span>
                  <span>
                    cloud:{" "}
                    <span>
                      <span className="current_number">
                        {weather.current.cloud}
                      </span>
                      %
                    </span>
                  </span>
                  <span>
                    wind:{" "}
                    <span>
                      <span className="current_number">
                        {weather.current.wind_kph}
                      </span>
                      kph
                    </span>
                  </span>
                </div>
              </div>
            </Section>
            <Section className="current_forecast">
              <div className="forecast_corousel">
                {weather.forecast.forecastday[0].hour.map((hour) => (
                  <ForecastCard
                    key={hour.time}
                    hour={hour.time.slice(11)}
                    icon={hour.condition.icon}
                    condition={`${hour.temp_c}c`}
                  />
                ))}
              </div>
            </Section>
            <Section className="forecast_container">
              {weather.forecast.forecastday.map((day) => (
                <div key={day.date} className="forecast_day">
                  <img
                    src={day.day.condition.icon}
                    alt={`${day.day.condition.text} condition`}
                  />
                  <span>{day.date}</span>
                  <span>
                    {day.day.maxtemp_c}/{day.day.mintemp_c}
                  </span>
                </div>
              ))}
            </Section>
          </>
        );
      } else {
        component = <p>failed to fetch data</p>;
      }
    }

    return component;
  };

  return getComponent();
}

export default Home;
