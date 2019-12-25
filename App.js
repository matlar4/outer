import React from 'react';
import { StyleSheet, Text, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Box from './box.js';

export default function App() {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🌱 Sålåda 6000 🌱</Text>
      <ScrollView style={styles.scrollView} horizontal= {true} decelerationRate={0} snapToInterval={Dimensions.get('window').width} snapToAlignment={'center'}>
        <Box/>
        <Box/>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    marginTop: 0,

  },
  TO:{
    flexDirection: 'row',
    flexWrap: "wrap",


  },
  img:{
    width:200,
    height: 200,
    marginHorizontal: 100,

  },
  title:{
    fontSize:45

  }
});
