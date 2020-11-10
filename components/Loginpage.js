import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const Loginpage = () =>{
  return (
<LinearGradient colors={['#8EC5FC', '#E0C3FC']}>
  <View style={styles.container}>
      <Text>
        LOCKIN Fitness
      </Text>
      <TouchableOpacity
       
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
  
  </View>
</LinearGradient>
    );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  }
});



export default Loginpage;