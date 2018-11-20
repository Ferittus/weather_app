import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, StatusBar  } from 'react-native';
import Weather from './Weather';

const API_KEY = '894c0c1d03546d1843b5efd334d6e479';
export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this._getWeather(position.coords)
        // this.setState({
        //   isLoaded: true
        // });
      }, 
      (error) => {
        console.log(error);
        this.setState({
          error
        })
      }
    );
  }

  _getWeather({latitude, longitude}) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)

      this.setState({
        temperature: json.main.temp,
        name:json.weather[0].main,
        isLoaded: true
      })
    });
  }

  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' hidden={true}/>
        {
          isLoaded ? <Weather name={this.state.name} temp={this.state.temperature}/> : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the beautiful weather</Text>
              { error ? <Text style={styles.errorText}>{error}</Text> : null }
            </View>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent'
  },
  loading: {
    flex:1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize:38,
    marginBottom: 93,
  }
});
