//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ImageBackground ,Image,} from 'react-native';
// import all basic components
// import { Fonts } from '../src/'
export default class Home extends Component {

    
  //Home Component
  render() {
    return (
      <View style={styles.MainContainer}>
          <ImageBackground 
            source={require('../image/bgi.jpg')} 
            style={styles.backGround}>
          <Text style={{fontFamily:'STARWARS'}}>STAR WARS EVRENİNE </Text>
          <Text style={{fontFamily:'STARWARS'}}>         HOŞGELDİNİZ</Text>
          </ImageBackground>
      </View>   
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    color : 'white',
    padding: 0,
  },
  text: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color:'white',
    padding:10,
    fontFamily:"STJEDISE"
  },
  backGround: {
      flex:1,
      width:'100%',
      height: '100%'
  }
});