//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image ,ImageBackground,ScrollView} from 'react-native';
// import all basic components
 
export default class Starships extends Component {
  //Screen2 Component
      constructor(props){
        super(props);
    this.state={text:' ',lenght:'',class:''}
    fetch('https://swapi.co/api/starships/2/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name:responseJson.name,
    lenght:responseJson.length,
    class:responseJson.starship_class,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/starships/3/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name2:responseJson.name,
    lenght2:responseJson.length,
    class2:responseJson.starship_class,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/starships/5/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name3:responseJson.name,
    lenght3:responseJson.length,
    class3:responseJson.starship_class,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/starships/9/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name4:responseJson.name,
    lenght4:responseJson.length,
    class4:responseJson.starship_class,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/starships/10/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name5:responseJson.name,
    lenght5:responseJson.length,
    class5:responseJson.starship_class,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/starships/11/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name6:responseJson.name,
    lenght6:responseJson.length,
    class6:responseJson.starship_class,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/starships/12/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name7:responseJson.name,
    lenght7:responseJson.length,
    class7:responseJson.starship_class,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/starships/13/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name8:responseJson.name,
    lenght8:responseJson.length,
    class8:responseJson.starship_class,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/starships/21/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name9:responseJson.name,
    lenght9:responseJson.length,
    class9:responseJson.starship_class,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/starships/23/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    name10:responseJson.name,
    lenght10:responseJson.length,
    class10:responseJson.starship_class,
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
        source={{uri:'https://milnersblog.files.wordpress.com/2017/08/star-wars-ea-battlefront-2-wallpaper-hd-hi-res-28.jpg'}} 
        style={styles.backGround}>
        <Text style={styles.text}> YILDIZ GEMİLERİ </Text>
        <Image
        style={styles.image}
        source={{uri:'https://live.staticflickr.com/715/31794874664_10bc157948_b.jpg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900&width=768'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name2}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght2}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class2}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://cdna.artstation.com/p/assets/images/images/019/160/250/large/alexander-ivanov-sent-7.jpg?1562265020'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name3}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght3}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class3}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://fsmedia.imgix.net/3b/7d/19/fd/c04a/433f/a655/c948156c9518/death-star.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=325&w=650'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name4}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght4}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class4}</Text>
        </ImageBackground>
        <ImageBackground 
        source={{uri:'https://www.pixel4k.com/wp-content/uploads/2019/04/star-wars-battlefront-2-4k_1555207681.jpg'}} 
        style={styles.backGround}>
        <Image
        style={styles.image}
        source={{uri:'http://i.milliyet.com.tr/MolaSlider/2017/11/08/fft351_mf25679065.Jpeg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name5}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght5}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class5}</Text>
        <Image
        style={styles.image}
        source={{uri:'http://i.milliyet.com.tr/MolaSlider/2017/11/08/fft351_mf25679065.Jpeg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name6}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght6}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class6}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://static.turbosquid.com/Preview/2015/10/14__02_29_23/xwingtopleft_01_open_01.jpgb5dc9c7c-25bc-44f8-88ba-50e41873111aZoom.jpg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name7}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght7}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class7}</Text>
        </ImageBackground>
        <ImageBackground 
        source={{uri:'https://ae01.alicdn.com/kf/HTB1HMFHtY5YBuNjSspoq6zeNFXa2/Stars-War-Spaceship-3D-Cartoon-Wallpaper-Mural-for-Baby-Child-Room-Sofa-Background-3d-Photo-Mural.jpg_640x640q70.jpg'}} 
        style={styles.backGround}>
        <Image
        style={styles.image}
        source={{uri:'https://vignette.wikia.nocookie.net/starwars/images/b/ba/DVTX1.png/revision/latest?cb=20150827050808'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name8}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght8}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class8}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://vignette.wikia.nocookie.net/starwars/images/b/ba/Slave_I_DICE.png/revision/latest?cb=20170825000729'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name9}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght9}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class9}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://i.pinimg.com/originals/9b/9e/00/9b9e00580376ca5a95eab3c0125aba27.png'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.name10}</Text>
        <Text style={styles.smallText}>Uzunluk :{this.state.lenght10}</Text>
        <Text style={styles.smallText}>Sınıf :{this.state.class10}</Text>
        </ImageBackground>
      </ScrollView>
      </View>
      );
    }
  }
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
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