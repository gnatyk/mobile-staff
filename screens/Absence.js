import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
export default class Absence extends React.Component {

  static navigationOptions = {
    title: 'Absence',
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <Icon
            name='left'
            type='antdesign'
            color='#f1f3f4'
            raised
            onPress={() => this.props.navigation.navigate('Home')}
          />
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },

})