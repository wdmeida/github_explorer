import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  state = {
    ballPosY: new Animated.Value(0), 
  }

  componentDidMount(){
    Animated.timing(this.state.ballPosY, {
      toValue: 400,
      duration: 2000,
    }).start();
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Animated.View 
          style={[
            styles.ball,
            { marginTop: this.state.ballPosY, }
          ]} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },

  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F00',
  },
});
