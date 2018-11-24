import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo';

const { width } = Dimensions.get('window');

const WeatherGroup = {
  0: {
    icon: 'weather-sunny',
    colors:['#f5af19', '#f12711'],
  },
  2: {
    icon: 'weather-lightning',
    colors:['#00ECBC', '#007ADF'],
  },
  3: {
    icon: 'weather-rainy',
    colors:['#FFFFFF', '#6DD5FA', '#2980B9'],
  },
  5: {
    icon: 'weather-pouring',
    colors:['#00c6fb', '#005bea'],
  },
  6: {
    icon: 'weather-snowy',
    colors:['#7DE2FC', '#B9B6E5'],
  },
  7: {
    icon: 'weather-fog',
    colors:['#BDC3C7', '#2C3E50'],
  },
  8: {
    icon: 'weather-cloudy',
    colors:['#D7D2CC', '#304352'],
  }
}

const Weather = ({ data }) => {
  console.log('=>', data);
  // console.log('=>', data.weather[0].id / 100);
  const id = data.weather[0].id;
  const weather = id === 800 ? WeatherGroup[0] : WeatherGroup[parseInt(id / 100)];
  // console.log(parseInt(id / 100));
  return (
    <LinearGradient colors={weather.colors} style={styles.container}>
      <View style={styles.top}>
        <MaterialCommunityIcons size={150} color='white' name={weather.icon}/>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.main}>{data.weather[0].main}</Text>
        <Text style={styles.temp}>{Math.ceil(data.main.temp - 273.15)}℃</Text>
      </View>
    </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  main: {
    fontSize: 50,
    marginBottom:10,
    fontWeight: '600',
    color: 'white'
  },
  temp: {
    fontSize: 30,
    color: 'white'
  }
});

export default Weather;