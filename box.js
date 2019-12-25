import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, Dimensions } from 'react-native';

class Box extends React.Component {
 render() {
  return <View style={styles.TO}>
            <Text style={styles.title}>LÅDA 1</Text>
            <TouchableOpacity><Image style={styles.img}source={require('./assets/plus.png')}/></TouchableOpacity>
        </View>;
   }
  }

export default Box;

const styles = StyleSheet.create({
    
    TO:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'green',
        height: Dimensions.get('window').height-40,
        width: Dimensions.get('window').width-40,
        margin: 20,
  
  
    },
    img:{
      width: 200,
      height: 200,
      marginHorizontal: 100,
  
    },
    title:{
        fontSize:40,
    }
  });