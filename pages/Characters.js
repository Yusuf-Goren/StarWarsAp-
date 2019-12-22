//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image ,ImageBackground,ScrollView} from 'react-native';
// import all basic components
 
export default class Characters extends Component {
  //Characters Component
  constructor(props){
    super(props);
this.state={text:' ',desc:'',item:''}
fetch('https://swapi.co/api/people/1/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text:responseJson.name,
    desc:responseJson.height,
    item:responseJson.mass,
  });
})
.catch((error) => {
console.error(error);
});

fetch('https://swapi.co/api/people/2/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text2:responseJson.name,
    desc2:responseJson.height,
    item2:responseJson.mass,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/people/3/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text3:responseJson.name,
    desc3:responseJson.height,
    item3:responseJson.mass,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/people/4/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text4:responseJson.name,
    desc4:responseJson.height,
    item4:responseJson.mass,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/people/5/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text5:responseJson.name,
    desc5:responseJson.height,
    item5:responseJson.mass,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/people/6/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text6:responseJson.name,
    desc6:responseJson.height,
    item6:responseJson.mass,
  });
})
fetch('https://swapi.co/api/people/7/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text7:responseJson.name,
    desc7:responseJson.height,
    item7:responseJson.mass,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/people/8/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text8:responseJson.name,
    desc8:responseJson.height,
    item8:responseJson.mass,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/people/9/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text9:responseJson.name,
    desc9:responseJson.height,
    item9:responseJson.mass,
  });
})
.catch((error) => {
console.error(error);
});
fetch('https://swapi.co/api/people/10/?format=json')
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    text10:responseJson.name,
    desc10:responseJson.height,
    item10:responseJson.mass,
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
        source={{uri:'https://images3.alphacoders.com/610/thumb-1920-61047.jpg'}} 
        style={styles.backGround}>
        <Text style={styles.text}> KAREKTERLER </Text>
        <Image
        style={styles.image}
        source={{uri:'https://www.sideshow.com/storage/product-images/300187/luke-skywalker_star-wars_gallery_5c4d3ec0c6b8b.jpg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://img.cinemablend.com/filter:scale/quill/7/c/f/8/0/7/7cf807bf58f88c639eddc8fbe6fa65fb9463d9bd.png?mw=600'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text2}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc2}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item2}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://i0.wp.com/starwarsevreni.com/wp-content/uploads/2016/05/r2-d2_1_sw-evreni.jpg?resize=768%2C471&ssl=1'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text3}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc3}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item3}</Text>
        </ImageBackground>  
        <ImageBackground 
        source={{uri:'http://wallpapers.net/web/wallpapers/star-wars-darth-vader-hd-wallpaper-for-desktop-mobiles/1366x768.jpg'}} 
        style={styles.backGround}>
        <Image
        style={styles.image}
        source={{uri:'https://cdn.kayiprihtim.com/wp-content/uploads/2019/09/darth-vader-ust.jpg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text4}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc4}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item4}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://vignette.wikia.nocookie.net/yildizsavaslari/images/1/19/Leia_Organa_TLJ_%281%29.png/revision/latest?cb=20190413110043&path-prefix=tr'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text5}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc5}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item5}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://i.pinimg.com/originals/1f/fb/93/1ffb93a66d8f80f27eafd56fa97c732c.jpg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text6}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc6}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item6}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://i.pinimg.com/originals/2b/bb/71/2bbb712405c574c6ce78730e00464a8e.jpg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text7}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc7}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item7}</Text>
        </ImageBackground>
        <ImageBackground 
        source={{uri:'https://www.larutadelsorigens.cat/filelook/full/10/100870/star-wars-iphone-wallpaper-hd.jpg'}} 
        style={styles.backGround}>
        <Image
        style={styles.image}
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=768'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text8}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc8}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item8}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text9}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc9}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item9}</Text>
        <Image
        style={styles.image}
        source={{uri:'https://im.haberturk.com/2019/08/16/2513645_bbab81afcebb7a9e704f8e5cb70879bb_640x640.jpg'}}
        />
        <Text style={styles.smallText}>İsim: {this.state.text10}</Text>
        <Text style={styles.smallText}>Boy :{this.state.desc10}</Text>
        <Text style={styles.smallText}>Kilo :{this.state.item10}</Text>
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
    color : 'white'
  },
  text: {
    alignItems: 'flex-end',
    fontWeight: 'bold',
    fontSize: 25,
    color:'white',
    fontFamily:"STJEDISE"
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