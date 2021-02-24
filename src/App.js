import React from 'react';
import {Provider} from 'react-redux';
import TimerListScreen from './screens/TimerListScreen';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <TimerListScreen />
    </Provider>
  );
}
