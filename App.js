import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Alert
} from 'react-native';
import {fetchWeather} from './weather'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      temp: 0,
      humidity: 0,
      time: null
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
    (posData) => fetchWeather(posData.coords.latitude,posData.coords.longitude)
    .then(data => this.setState({
      temp: Math.round(data.temp),
      humidity: data.humidity,
      time: new Date().toLocaleString()
    })),
    (error) => alert(error),
    {timeout: 1000}
    )
  }

  onButtonPress = () => {
    this.getLocation()
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        <View style={styles.header}>
          <Text style={styles.temp}>
          <Text style={{color: 'red'}}>Weather</Text> At Your Location
        </Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.temp}>Humidity: {this.state.humidity}</Text>
          <Text style={styles.temp}>Temp: {this.state.temp}° C</Text>
          <Text>Updated: {this.state.time}</Text>
        </View>
        <View>
          <Button
            onPress={this.onButtonPress}
            title="Refresh"
            color="red"
          />
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
    justifyContent: 'center',
    flex: 1,
  },
  temp: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 45,
    color: 'white'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  }
})
