/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import {fetchWeather} from './weather'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      temp: 0,
      humidity: 0

    }
  }


  componentDidMount() {
    this.getLocation()
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
    (posData) => fetchWeather(posData.coords.latitude,posData.coords.longitude)
    .then(data => this.setState({
      temp: data.temp,
      humidity: data.humidity
    })),
    (error) => alert(error),
    {timeout: 1000}
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        <View style={styles.header}>
        <Text style={styles.temp}>{this.state.humidity}</Text>
          <Text style={styles.temp}>{this.state.temp}°</Text>
        </View>
        <View style={styles.body}>
        <Text style={styles.temp}>
          <Text style={{color: 'red'}}>Weather</Text> At Your Location
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD017'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor:'blue'
  },
  temp: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 45,
    color: 'white'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    flex: 1,
    // backgroundColor:'red'
  }
})
