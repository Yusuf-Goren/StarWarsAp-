//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ImageBackground ,ScrollView,Image} from 'react-native';
// import all basic components
 
export default class Planets extends Component {
  constructor(props){
        super(props);
        this.state={name:'',diameter:'',population:''}
        fetch('https://swapi.co/api/planets/1/?format=json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
          name:responseJson.name,
          diameter:responseJson.diameter,
          population:responseJson.population,
        });
      })
      .catch((error) => {
      console.error(error);
    });
    fetch('https://swapi.co/api/planets/2/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      name2:responseJson.name,
      diameter2:responseJson.diameter,
      population2:responseJson.population,
    });
  })
  .catch((error) => {
  console.error(error);
});
fetch('https://swapi.co/api/planets/3/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      name3:responseJson.name,
      diameter3:responseJson.diameter,
      population3:responseJson.population,
    });
  })
  .catch((error) => {
  console.error(error);
});
fetch('https://swapi.co/api/planets/4/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      name4:responseJson.name,
      diameter4:responseJson.diameter,
      population4:responseJson.population,
    });
  })
  .catch((error) => {
  console.error(error);
});
fetch('https://swapi.co/api/planets/5/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      name5:responseJson.name,
      diameter5:responseJson.diameter,
      population5:responseJson.population,
    });
  })
  .catch((error) => {
  console.error(error);
});

fetch('https://swapi.co/api/planets/6/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      name6:responseJson.name,
      diameter6:responseJson.diameter,
      population6:responseJson.population,
    });
  })
  .catch((error) => {
  console.error(error);
});
fetch('https://swapi.co/api/planets/7/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      name7:responseJson.name,
      diameter7:responseJson.diameter,
      population7:responseJson.population,
    });
  })
  .catch((error) => {
  console.error(error);
});
fetch('https://swapi.co/api/planets/8/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      name8:responseJson.name,
      diameter8:responseJson.diameter,
      population8:responseJson.population,
    });
  })
  .catch((error) => {
  console.error(error);
});
fetch('https://swapi.co/api/planets/9/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      name9:responseJson.name,
      diameter9:responseJson.diameter,
      population9:responseJson.population,
    });
  })
  .catch((error) => {
  console.error(error);
});
fetch('https://swapi.co/api/planets/10/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      name10:responseJson.name,
      diameter10:responseJson.diameter,
      population10:responseJson.population,
    });
  })
  .catch((error) => {
  console.error(error);
});

}
  render() {
    return (
        <View style={styles.MainContainer}>
        <ScrollView style={styles.scrollView}>
        <ImageBackground 
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/alderaan-3-retina_45d076ff.jpeg?region=0%2C0%2C1200%2C544'}} 
        style={styles.backGround}>
        <Text style={styles.text}>GEZEGENLER</Text>
        <Image
        style={styles.image}
        source={{uri:'https://images.alphacoders.com/787/787215.jpg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://vignette.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name2}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter2}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population2}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=768'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name3}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter3}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population3}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675&width=768'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name4}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter4}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population4}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711&width=768'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name5}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter5}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population5}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878&width=768'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name6}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter6}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population6}</Text>
        </ImageBackground>
        <ImageBackground 
        source={{uri:'https://siboneycubancuisine.com/image/4207-full_earth-death-star-star-wars-digital-art-1920x1200-hd.jpg'}} 
        style={styles.backGround}>
        <Image
        style={styles.image}
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878&width=768'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name7}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter7}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population7}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878&width=768'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name8}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter8}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population8}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://i1.wp.com/yildizsavaslari.com/wordpress/wp-content/uploads/2017/06/Coruscant_03db43b4.jpg?fit=980%2C400'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name9}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter9}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population9}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://i1.wp.com/yildizsavaslari.com/wordpress/wp-content/uploads/2017/06/databank_kamino_01_169_f9027822.jpg?fit=980%2C400'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name10}</Text>
        <Text style={styles.smallText}>Çap :{this.state.diameter10}</Text>
        <Text style={styles.smallText}>Nüfus :{this.state.population10}</Text>
        </ImageBackground>
        </ScrollView>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    fontWeight: 'bold',
    color : 'white',
  },
  text: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color:'white',
  },
  smallText: {
    fontSize:20,
    justifyContent:'flex-end',
    color:'white'
  },
  backGround: {
    flex:1,
    width:'100%',
    height: '100%'
  },  
  scrollView: {
    marginLeft: 10,
  },
  image:{
    height:50,
    width:50,
    padding:5
  }
});