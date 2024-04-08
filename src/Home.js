import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { useState, useEffect } from "react";

const Home = () => {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [greeting, setGreeting] = useState('Good Morning !');
    const Username = 'vicky31xHork';


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
      <SafeAreaView>
          <Text style={styles.Greettext}>{greeting}</Text>
          <Text style={styles.Usertext}>{Username}</Text>
          <View style={styles.Weathercon}></View>
      </SafeAreaView>
    );
  }

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
        width: '95%',
        height: '50%',
        borderRadius: 10,
        backgroundColor: 'black',
        marginHorizontal: 10,
        marginTop: 20
      }
  });

  export default Home;