import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

// export default class Weather extends Component {
//   render() {
//       return (
//         <LinearGradient colors={['#00c6fb', '#005bea']} style={styles.container}>
//           <View style={styles.upper}>
//             <Ionicons color='white' size={144} name='ios-rainy'/>
//             <Text style={styles.temp}>35</Text>
//           </View>     
//           <View style={styles.lower}>
//           <Text style={styles.title}>Raining like a MF</Text>
//           <Text style={styles.subtitle}>For more into look outside</Text>
//         </View>       
//         </LinearGradient>
//       )
//   }
// }

const weathersCases = {
  Rain: {
    colors:['#00c6fb', '#005bea'],
    title: 'Raining like a MF',
    subtitle: 'For more into look outside',
    icon: 'weather-rainy'
  },
  Clear: {
    colors:['#FEF253', '#FF7300'],
    title: 'Sunny as MF',
    subtitle: 'Go get your ass brunt',
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors:['#00ECBC', '#007ADF'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outside of the house',
    icon: 'weather-lightning'
  },
  Clouds: {
    colors:['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'I know, very boring',
    icon: 'weather-cloudy'
  },
  Snow: {
    colors:['#7DE2FC', '#B9B6E5'],
    title: 'Cold as balls',
    subtitle: 'Do you want to build a snowman?',
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors:['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'Is like rain?',
    icon: 'weather-hail'
  },
  Haze: {
    colors:['#89F7FE', '#66A6FF'],
    title: 'Haze',
    subtitle: 'Is like rain?',
    icon: 'weather-fog'
  },
  Mist: {
    colors:['#D7D2CC', '#304352'],
    title: 'Haze',
    subtitle: 'Is like rain?',
    icon: 'weather-fog'
  }
}

function Weather ({ temp, name }) {
  const weather = weathersCases[name];
  return (
    <LinearGradient colors={weather.colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color='white' size={144} name={weather.icon}/>
        <Text style={styles.temp}>{Math.ceil(temp - 273.15)}℃</Text>
      </View>     
      <View style={styles.lower}>
      <Text style={styles.title}>{weather.title}</Text>
      <Text style={styles.subtitle}>{weather.subtitle}</Text>
    </View>       
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  upper: {
    flex:1,
    alignItems: "center",
    justifyContent: 'center'
  },
  temp: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10
  },
  lower: {
    flex:1,
    alignItems: "flex-start",
    justifyContent: 'flex-end',
    paddingLeft:25,
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom:10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 24
  }
})