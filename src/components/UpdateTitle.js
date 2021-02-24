import React, {Component} from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import genericShadow from '../utils/genericShadow';

class UpdateTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleTitleChange = (text) => {
    this.setState({text});
  };
  updateTitle = () => {
    this.props.updateTitle(this.state.text);
  };
  cancelUpdate = () => {
    this.props.cancelUpdate();
  };
  render() {
    return (
      <View style={styles.section}>
        <TextInput
          style={styles.textInput}
          autoCorrect
          autoFocus
          underlineColorAndroid="blue"
          onChangeText={this.handleTitleChange}
          defaultValue={this.props.defaultValue}
          value={this.state.text}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '25%',
          }}>
          <TouchableOpacity onPress={this.updateTitle}>
            <Image
              source={require('../assets/checked.png')}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.cancelUpdate}>
            <Image
              source={require('../assets/cancel.png')}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default UpdateTitle;

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textInput: {
    maxWidth: '70%',
    height: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    backgroundColor: 'white',
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
});
