import React, {Component} from 'react';
import {View} from 'react-native';
import Timer from './components/Timer';

class App extends Component {
  state = {
    timers: [
      {
        id: 1,
        title: 'Timer 1',
        elapsed: 5456099,
        isRunning: true,
      },
      {
        id: 2,
        title: 'Timer 2',
        elapsed: 1273998,
        isRunning: false,
      },
    ],
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const {timers} = this.state;
      this.setState({
        timers: timers.map((timer) => {
          const {elapsed, isRunning} = timer;
          return {
            ...timer,
            elapsed: isRunning ? elapsed + 1000 : elapsed,
          };
        }),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {this.state.timers.map(({title, id, elapsed, isRunning}) => (
          <Timer
            id={id}
            title={title}
            elapsed={elapsed}
            isRunning={isRunning}
          />
        ))}
      </View>
    );
  }
}

export default App;
