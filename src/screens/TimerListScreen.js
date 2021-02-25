import React, {Component} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Timer from '../components/Timer';
import {addTimer, toggleTimer, updateTimer} from '../redux/events/timerActions';
import {connect} from 'react-redux';
import genericShadow from '../utils/genericShadow';
import AddTimer from '../components/AddTimer';
import Empty from '../components/Empty';

class TimerListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddSectionClosed: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const timers = this.props?.timersData?.timers?.map((timer) => {
        const {elapsed, isRunning} = timer;
        return {
          ...timer,
          elapsed: isRunning ? elapsed + 1000 : elapsed,
        };
      });
      this.props.updateTimer(timers);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleTimer = (timerId) => {
    this.props.toggleTimer(timerId);
  };

  onAddTimer = (title) => {
    this.props.addTimer([
      {
        id: Math.floor(Math.random() * 100000),
        title,
        elapsed: 0,
        isRunning: false,
        editable: false,
      },
    ]);
    this.toggleAdd();
  };

  toggleAdd = () => {
    this.setState((prevState) => {
      return {
        isAddSectionClosed: !prevState.isAddSectionClosed,
      };
    });
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <KeyboardAvoidingView>
          <ScrollView
            style={{
              paddingVertical: 30,
              height: '100%',
            }}>
            {!this.props.timersData.timers.length ? (
              <Empty />
            ) : (
              this.props.timersData.timers.map(
                ({title, id, elapsed, isRunning, editable}, index) => (
                  <Timer
                    key={index}
                    id={id}
                    title={title}
                    elapsed={elapsed}
                    isRunning={isRunning}
                    editable={editable}
                    onStart={this.toggleTimer}
                    onPause={this.toggleTimer}
                  />
                ),
              )
            )}
          </ScrollView>
        </KeyboardAvoidingView>
        {!this.state.isAddSectionClosed && (
          <AddTimer onAddTimer={this.onAddTimer} />
        )}
        <TouchableOpacity onPress={this.toggleAdd} style={styles.addButton}>
          <Image
            source={
              this.state.isAddSectionClosed
                ? require('../assets/plus.png')
                : require('../assets/cancel.png')
            }
            style={styles.plus}
          />
        </TouchableOpacity>
      </SafeAreaView>
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
    updateTimer: (timers) => dispatch(updateTimer(timers)),
    toggleTimer: (id) => dispatch(toggleTimer(id)),
    addTimer: (timer) => dispatch(addTimer(timer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerListScreen);

const styles = StyleSheet.create({
  plus: {
    width: 70,
    height: 70,
  },
  addButton: {
    borderRadius: 35,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    ...genericShadow,
  },
});
