import { useState } from "react";

function Main() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getComponent = () => {
    let component = <p>loading...</p>;
    if (!isLoading) {
      if (weather) {
        component = <p>{weather.current.condition.text}</p>;
      } else {
        component = <p>failed to catch data</p>;
      }
    }

    return component;
  };

  return getComponent();
}

export default Main;
