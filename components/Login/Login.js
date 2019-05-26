import React from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { requestLogin } from './actions';

class Login extends React.Component {
  render() {
    const { onLogin, error, navigation } = this.props;
    return (
      <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('../../images/test.jpg')}
          />
          <Text style={styles.title} >Nastia the best of girl on the world. Remember this.</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm onLogin={onLogin} error={error} navigation={navigation} />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 180,
    textAlign: 'center',
    opacity: 0.9,
  },
  logo: {
    width: 100,
    height: 100,
  }
});

function mapStateToProps(state) {
  return {
    error: state.loginReducer.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onLogin: (data) => dispatch(requestLogin(data))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
