
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity ,StyleSheet,Text,TextInput,} from 'react-native';
// import all basic components
 

// import {
//   createStackNavigator,
//   createDrawerNavigator,
//   createAppContainer,
// } from 'react-navigation';
 
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Planets from './pages/Planets';
import Starships from './pages/Starships';




class NavigationDrawerStructure extends Component {

  constructor(props) {
    super(props);

    this.state = {text: ''}
  ;}

  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  // renderitem =({id }) =>id.toString();
  //   fullname={author}
    
  render() {
    return (
     
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
          </TouchableOpacity>    
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
   
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      
      title: 'ANASAYFA',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
    },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Characters,
    navigationOptions: ({ navigation }) => ({
      title: 'KARAKTERLER',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Planets,
    navigationOptions: ({ navigation }) => ({
      title: 'GEZEGENLER',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Starships,
    navigationOptions: ({ navigation }) => ({
      title: 'YILDIZ GEMİLERİ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
    Home: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'ANASAYFA',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'KARATERLER',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'GEZEGENLER',
    },
  },
  Screen4: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'YILDIZ GEMİLERİ',
    },
  },
});
 
export default createAppContainer(DrawerNavigatorExample);
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
    fontFamily:"BITSUMIS",
  },
  custom: {
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
    fontFamily: "Volkswagen-Bold",
    color:'red',
  }
});
