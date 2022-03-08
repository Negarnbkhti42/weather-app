import { useEffect } from "react";
import { useState } from "react";
import { getCurrentWeather } from "../../services/httpService/getCurrentWeather";

function Main() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentWeather()
      .then((res) => setWeather(res.data.current))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const getComponent = () => {
    let component = <p>loading...</p>;
    if (!isLoading) {
      if (weather) {
        component = <p>got it</p>;
      } else {
        component = <p>failed to catch data</p>;
      }
    }

    return component;
  };

  return getComponent();
}

export default Main;
