import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import genericShadow from '../utils/genericShadow';
import UpdateTitle from './UpdateTitle';
import {
  deleteTimer,
  editTimer,
  updateTimer,
} from '../redux/events/timerActions';
import {connect} from 'react-redux';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
    };
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
        onPress={isRunning ? this.handlePause : this.handlePlay}>
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

  defaultTitleSection = () => (
    <View style={styles.section}>
      <Text style={styles.title}>{this.props.title || 'No title'}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '25%',
        }}>
        <TouchableOpacity onPress={this.handleEdit}>
          <Image
            source={require('../assets/edit.png')}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleRemove}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  handleEdit = () => {
    const timerId = this.props.id;
    this.props.editTimer(timerId);
  };

  handleRemove = () => {
    const {id, deleteTimer} = this.props;
    deleteTimer(id);
  };

  handlePlay = () => {
    const {id, onStart} = this.props;
    onStart(id);
  };

  handlePause = () => {
    const {id, onPause} = this.props;
    onPause(id);
  };

  updateTitle = (title) => {
    const {id, timersData, updateTimer} = this.props;
    const timers = timersData.timers.map((timer) => {
      if (timer.id === id) {
        return {
          ...timer,
          title,
          editable: !timer.editable,
        };
      }
      return timer;
    });
    updateTimer(timers);
  };

  render() {
    const {elapsed, editable, title} = this.props;
    const elapsedString = this.formatMilliSeconds(elapsed);
    return (
      <View style={styles.timerContainer}>
        {editable ? (
          <UpdateTitle
            defaultValue={title}
            updateTitle={this.updateTitle}
            cancelUpdate={this.handleEdit}
          />
        ) : (
          this.defaultTitleSection()
        )}
        <View style={styles.section}>
          {this.renderActionButton()}
          <Text style={styles.elapsedTime}>{elapsedString}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timersData: state.timers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTimer: (timers) => dispatch(deleteTimer(timers)),
    editTimer: (id) => dispatch(editTimer(id)),
    updateTimer: (timers) => dispatch(updateTimer(timers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

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
    maxWidth: '70%',
    fontSize: 25,
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
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
  textInput: {
    flex: 1,
    height: 30,
    padding: 0,
    fontSize: 25,
    color: 'blue',
    fontWeight: 'bold',
  },
});
