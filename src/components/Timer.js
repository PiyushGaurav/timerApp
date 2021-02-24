import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import genericShadow from '../utils/genericShadow';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  formatMilliSeconds = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    return `${hours.toString()} : ${minutes.toString()} : ${seconds.toString()}`;
  };

  renderActionButton() {
    const {isRunning} = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.actionButtonStyle,
          {backgroundColor: isRunning ? 'red' : 'green'},
        ]}
        onPress={isRunning ? this.handleStopPress : this.handleStartPress}>
        <Image
          source={
            isRunning
              ? require('../assets/pause.png')
              : require('../assets/play.png')
          }
          style={[styles.iconStyle, {marginLeft: isRunning ? 0 : 5}]}
        />
      </TouchableOpacity>
    );
  }

  renderEditAndDeleteAction = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '25%',
      }}>
      <TouchableOpacity
        onPress={() => {
          alert('edit');
        }}>
        <Image
          source={require('../assets/edit.png')}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('remove');
        }}>
        <Image
          source={require('../assets/delete.png')}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );

  handleStartPress = () => {
    const {id, onStartPress} = this.props;
    onStartPress(id);
  };

  handleStopPress = () => {
    const {id, onStopPress} = this.props;
    onStopPress(id);
  };

  render() {
    const {title, elapsed} = this.props;
    const elapsedString = this.formatMilliSeconds(elapsed);
    return (
      <View style={styles.timerContainer}>
        <View style={styles.section}>
          <Text style={styles.title}>{title}</Text>
          {this.renderEditAndDeleteAction()}
        </View>
        <View style={styles.section}>
          {this.renderActionButton()}
          <Text style={styles.elapsedTime}>{elapsedString}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    ...genericShadow,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  elapsedTime: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  actionButtonStyle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    ...genericShadow,
  },
});
