import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };


  onLogout = async () => {
    await AsyncStorage.removeItem('@USER_TOKEN');
    this.props.navigation.navigate('AuthLoading');
  };

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => this.onLogout()} 
          style={styles.buttonContainer} >
          <Text style={styles.buttonText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
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
})

export default (SettingsScreen);