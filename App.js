import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Weather from './Weather';
import { LinearGradient } from 'expo';

const { width } = Dimensions.get('window');

const API_KEY = '894c0c1d03546d1843b5efd334d6e479';

export default class App extends React.Component {
  state = {
    loading: true,
    weather: null,
  }

  render() {
    return (
      <LinearGradient colors={['#108dc7', '#ef8e38']} style={styles.container}>
        { 
          this.state.loading ? <Text style={styles.text}>Weather</Text>  : <Weather data={this.state.weather} />
        }
      </LinearGradient>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this._getWeather(position.coords); // 추가된 코드
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

  _getWeather = ({latitude, longitude}) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json()) // 응답값을 json으로 변환
    .then(json => {
      // console.log(json);
      this.setState({
        weather: json,
        loading: false
      })
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:50,
    color: 'white'
  }
});
