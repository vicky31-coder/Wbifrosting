import { useEffect , useState } from "react";
import axios from "axios";
import { Text } from "react-native";

const Api = () => {

    const [weatherData, setweatherData] = useState(null);
    const API_KEY = '7320fa03aa039638f10340d81f72b990';
    const city = 'chennai'

    useEffect(() => {
      console.log('Fetching weather data...');
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
          console.log('Weather data fetched successfully:', response.data);
          setweatherData(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }, [API_KEY, city]);
    
  return (
    <Text>hi</Text>
  )
}

export default Api