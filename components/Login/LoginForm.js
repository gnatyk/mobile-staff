import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';


export default class LoginForm extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    user: '',
    pass: '',
  }
}

  render() {
    const { onLogin, error, navigation } = this.props;
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <TextInput
          placeholder="email"
          onChangeText={(user) => this.setState({user})}
          value={this.state.user}
          placeholderTextColor="rgba(255,255,255,0.2)"
          style={styles.input}
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
        />
        <TextInput
          placeholder="password"
          onChangeText={(pass) => this.setState({pass})}
          value={this.state.pass}
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.2)"
          style={styles.input}
          secureTextEntry
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}          
        />
        {error && <Text style={styles.errorPlace}>{error}</Text>}
        <TouchableOpacity onPress={() => onLogin({user: this.state.user, pass: this.state.pass, navigation})} style={styles.buttonContainer} >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  errorPlace: {
    color: '#9a050f',
    marginBottom: 10,
  }
})
