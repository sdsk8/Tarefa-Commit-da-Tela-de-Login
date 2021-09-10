import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <View style={styles.header}>

      <Image source={require("./src/assets/bla.jpg")}>

      </Image>

      
      
    </View>
    

    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor:'#FFF',
  
  },

  header:{
    backgroundColor: '#1261A0',
    minHeight: 50,
    paddingTop: 30, 
    
  },

});
