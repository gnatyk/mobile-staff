import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { requestGetAllAbsences } from './actions';
import { connect } from 'react-redux';


const extractKey = ({id}) => id.toString()

class ListOfAbsences extends Component {
constructor(props) {
  super(props);
  this.renderItem = this.renderItem.bind(this);
}

  componentDidMount() {
    this.props.onGetAllAbsences();
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.row} >
        <View style={styles.status}>
          <Icon
            reverse
            name='schedule'
            type='material-icons'
            color='#eff7fd'
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.type}>{item.reason}</Text>
          <Text style={styles.data}>{item.start_date}/{item.end_date}</Text>
        </View>
        <TouchableOpacity 
        style={styles.continue} 
        onPress={() => { console.log(this.props, 'onpress'); this.props.navigation.navigate('Absence', { absenceId: item.id })}}
        >
        <View >
          <Icon
            name='right'
            type='antdesign'
            color='#f1f3f4'
          />
        </View>
        </TouchableOpacity>    
      </View>
    )
  } 

  render() {
    const { allAbsences, onGetAllAbsences } = this.props;
    return (
        <FlatList
          style={styles.container}
          data={allAbsences}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
          onEndReached={onGetAllAbsences}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 6,
    flexDirection: 'row',
    padding: 5,
    marginBottom: 5,
    borderBottomColor: '#f1f3f4',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    flex: 1,
    marginRight: 15,
  },
  description: {
    flex: 4,
  },
  continue: {
    flex: 1,
  },
  data: {
    opacity: 0.9,
    color: '#9ea6ad',
  },
  type: {
    marginBottom: 5,
  }
})

function mapStateToProps(state) {
  return {
    allAbsences: state.absencesReducer.allAbsences,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onGetAllAbsences: () => dispatch(requestGetAllAbsences())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfAbsences);