import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import partlycloudy from "../assets/partlycloudy.png"
import temp from "../assets/sun1.png"
import humidity from "../assets/Humidity.png"
import windspeed from "../assets/wind.png"
import { KeyboardAvoidingView } from "react-native";

const Home = () => {

    const [currentTime ] = useState(new Date());
    const [greeting, setGreeting] = useState('Good Morning !');
    const Username = 'vicky31xHork';
    const [weatherData, setweatherData] = useState(null);
    const API_KEY = '7320fa03aa039638f10340d81f72b990';
    const city = 'chennai'


    useEffect(() => {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
          setweatherData(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }, [API_KEY, city]);


    useEffect(() => {
        if (currentTime.getHours() >= 12 && currentTime.getHours() < 17) {
          setGreeting('Good Afternoon !');
        } else if (currentTime.getHours() >= 17 && currentTime.getHours() < 19) {
          setGreeting('Good Evening !');
        } else if (currentTime.getHours() >= 19) {
          setGreeting('Good Night !');
        } else {
          setGreeting('Good Morning !');
        }
      }, [currentTime]);


    return (
      <KeyboardAvoidingView>
      <SafeAreaView>
          <Text style={styles.Greettext}>{greeting}</Text>
          <Text style={styles.Usertext}>{Username}</Text>
          <View style={styles.Weathercon}>
            {weatherData && ( //checks if the weather data is null or not
              <View style={styles.weathercondata}>
                <Text style={styles.cityname}>{weatherData.name}</Text>
                <Text style={styles.description}>{weatherData.weather[0].description}</Text>
              </View>
            )}
            <View style={styles.weathericoncon}>
              <Image source={partlycloudy} style={styles.weathericon} />
            </View>
          </View>
          <View style={styles.datacon}>
            <View style={styles.temp}>
              <Image source={temp} style={styles.tempicon}/>
              <Text style={styles.tempheading}>Temperature</Text>
              {weatherData && (
              <Text style={styles.temptext}>{weatherData.main.temp} °C</Text>
              )}
            </View>
            <View style={styles.humidity}>
              <Image source={humidity} style={styles.humidityicon} />
              <Text style={styles.humidityheading}>Humidity</Text>
              {weatherData && (
              <Text style={styles.humiditytext}>{weatherData.main.humidity} %</Text>
              )}
            </View>
            <View style={styles.windspeed}>
              <Image source={windspeed} style={styles.windspeedicon} />
              <Text style={styles.windspeedheading}>windspeed</Text>
              {weatherData && (
              <Text style={styles.windspeedtext}>{weatherData.wind.speed} m/s</Text>
              )}
            </View>
          </View>
      </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }

const screenWidth = Dimensions.get('window').width;
const FontSize = screenWidth * 0.05;
const styles = StyleSheet.create({
    Greettext: {
        color: 'black',
        fontSize: 25,
        marginTop: '10%',
        marginHorizontal: '5%'
      },

      Usertext: {
        color: 'black',
        fontSize: 25,
        paddingTop: '-5%',
        paddingLeft: '5%'
      },

      Weathercon: {
        Width: '95%',
        maxHeight: '50%',
        borderRadius: 10,
        backgroundColor: 'black',
        marginHorizontal: '2.5%',
        marginTop: 20,
        flexDirection:'row'
      },
      cityname: {
        color: "white",
        marginLeft:'48%',
        marginTop:'3%',
        fontSize: FontSize*2.25
      },
      description: {
        color: "white",
        marginLeft:'49%',
        fontSize: FontSize*1.125
      },
      weathericon: {
        width: '100%',
        height: '100%'
      },
      weathercondata: {
        flexDirection:'column'
      },
      weathericoncon: {
        width: 100,
        height: 100,
        marginLeft: '-82.5%',
        marginVertical:'4.5%'
      },
      datacon: {
        Width:'%85',
        height:'30%',
        marginVertical: '2.5%',
        marginHorizontal: '2.5%',
        backgroundColor: 'black',
        borderRadius: 10,
        flexDirection:'row'
      },
      temp: {
        flexDirection:'column',
        marginTop:'2.5%',
        marginLeft:'2.5%'
      },
      tempicon: {
        width:40,
        height:40,
        marginTop:'10%',
        marginLeft: '25%'
      },
      temptext: {
        color:'white',
        paddingLeft: '21%',
        paddingTop:'2%'
      },
      tempheading: {
        color: 'white',
        marginLeft: '10%',
        paddingTop: '2%'
      },
      humidity: {
        flexDirection:'column',
        marginLeft: '-7%',
        marginTop: '1.2%'
      },
      humidityicon: {
        width:40,
        height:40,
        marginTop:'10%',
        marginLeft:'32.5%'
      },
      humidityheading: {
      color:'white',
      paddingLeft: '28%',
      paddingTop: '5%'
      },
      humiditytext: {
        color:'white',
        paddingLeft: '34.5%',
        marginTop: '0.5%'
      },
      windspeed: {
        flexDirection:'column',
        marginTop: '2.25%'
      },
      windspeedicon: {
        width:40,
        height:40,
        marginTop:'20%',
        marginLeft:'10%'
      },
      windspeedheading: {
        color:'white',
        marginLeft:'-5%',
        marginTop:'5%'
      },
      windspeedtext: {
        color: 'white',
        paddingTop: '2%',
        paddingLeft: '5%'
      }

  });

  export default Home;