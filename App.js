import React, {Component} from 'react';
import {View, Text} from 'react-native';
class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Timer</Text>
      </View>
    );
  }
}

export default App;
