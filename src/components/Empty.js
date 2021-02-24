import React, {Component} from 'react';
import {Text, View} from 'react-native';
class Empty extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'blue',
          }}>
          No timers found
        </Text>
      </View>
    );
  }
}

export default Empty;
