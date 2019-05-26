import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ListOfAbsences from '../components/ListOfAbsences/ListOfAbsences';

export default class AbsencesScreen extends React.Component {

 static navigationOptions = {
    title: 'Absences',
  };

  render () {
    const state = this.state;
    return (
      <ScrollView style={styles.container}>
        <ListOfAbsences />
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },

})