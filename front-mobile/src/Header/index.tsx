
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.text} >DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#DA5C5C',
      height: 100,
      paddingTop: 50,
      flexDirection: 'row',
      justifyContent: 'center'
  },
  text: {
    fontFamily: 'OpenSans_700Bold',
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 25,
    fontSize: 18,
    letterSpacing: -0.24,
    marginLeft: 15
  }
});
