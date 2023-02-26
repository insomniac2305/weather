import cloudy from "./assets/cloudy.svg";
import dayClear from "./assets/day-clear.svg";
import dayCloudy from "./assets/day-cloudy.svg";
import dayRain from "./assets/day-rain.svg";
import fog from "./assets/fog.svg";
import nightClear from "./assets/night-clear.svg";
import nightCloudy from "./assets/night-cloudy.svg";
import nightRain from "./assets/night-rain.svg";
import overcast from "./assets/overcast.svg";
import rain from "./assets/rain.svg";
import snow from "./assets/snow.svg";
import thunderstorm from "./assets/thunderstorm.svg";
import notFound from "./assets/not-found.png";
import search from "./assets/search.png";
import location from "./assets/location.png";

export default (() => {
  const iconMapping = {
    "01d": dayClear,
    "02d": dayCloudy,
    "03d": cloudy,
    "04d": overcast,
    "09d": rain,
    "10d": dayRain,
    "11d": thunderstorm,
    "13d": snow,
    "50d": fog,
    "01n": nightClear,
    "02n": nightCloudy,
    "03n": cloudy,
    "04n": overcast,
    "09n": rain,
    "10n": nightRain,
    "11n": thunderstorm,
    "13n": snow,
    "50n": fog,
    "not-found": notFound,
    "search": search,
    "location": location,
  };

  const getIcon = (code) => {
    let iconPath = iconMapping[code];
    iconPath = iconPath || notFound;
    return iconPath;
  };

  return { getIcon };
})();
