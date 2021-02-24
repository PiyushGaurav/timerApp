import React, {Component} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'black'} />
      </View>
    );
  }
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
