import React from 'react';
import {StyleSheet} from 'react-native';
import ListOfAbsences from '../components/ListOfAbsences/ListOfAbsences';

export default class AbsencesScreen extends React.Component {

 static navigationOptions = {
    title: 'Absences',
  };

  render () {
    const state = this.state;
    return (
        <ListOfAbsences />
    )
  }

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },

})