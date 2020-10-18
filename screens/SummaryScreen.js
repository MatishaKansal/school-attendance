import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import db from '../config'

export default class SummaryScreen extends React.Component{
 updateAttendance(roll_no, status){
   var id = '';
   if(roll_no <= 9){
     id = '0' + roll_no;
   } else{
     id = roll_no;
   }
   var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth() + 1;

   var yyyy = today.getFullYear();
   if(dd< 10){
     dd = '0' + dd;
   }
   if(mm < 10){
     mm = '0' +mm;
   }
   today = dd + '-' + mm + '-' + yyyy;
   var ref_path = id;
   var class_ref = db.ref(ref_path);
  class_ref.update({
    today: [status]
  });
 }

  render(){
    return(
      <View>
      </View>
    )
  }
}