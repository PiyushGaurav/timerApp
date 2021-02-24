import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import genericShadow from '../utils/genericShadow';

class AddTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleTitleChange = (text) => {
    this.setState({text});
  };

  onPress = () => {
    this.props.onAddTimer(this.state.text);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.handleTitleChange}
          style={styles.textInput}
          placeholder={'Title'}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onPress}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTimer;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 120,
    width: '90%',
    height: 180,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 20,
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    margin: 10,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    ...genericShadow,
  },
  textInput: {
    margin: 20,
    fontSize: 25,
    height: 50,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor: 'white',
  },
});
