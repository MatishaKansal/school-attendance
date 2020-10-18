import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/appHeader';
import db from '../config'

export default class HomeScreen extends React.Component {

constructor() {
    super();
    this.state = {
      all_students: []
    };
}
goToSummaryScreen=()=> {
      this.props.navigation.navigate('SummaryScreen')
    }
  attendance= async () => {
    var class_ref = await db.ref('/').on('value', data => {
    var all_students = [];
    var class_a = data.val().class_A;
    for(var i in class_a){
      all_students.push(class_a[i]);
    }
  all_students.sort(function(a,b) {
    return a.roll_no - b.roll_no;
  })
  this.setState({all_students: all_students});
    })
}
  render(){
    return(
      <View>
      <AppHeader / >
      <TouchableOpacity
      onPress ={()=>this.goToSummaryScreen()}>
      </TouchableOpacity>
      </View>
    )
  }
}