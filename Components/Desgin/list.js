import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Man from '../../Images/men.jpg';
import Sho from '../../Images/Shoes.png';
import TShirt from '../../Images/TShirt.jpg';
import Watch from '../../Images/watch.png';
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [{img:Man, Name:'Men Collection'},{img:Sho, Name:'Shoes'},{img:Watch, Name:'T-Shirts'},{img:Man, Name:'Men Collection'},{img:Sho, Name:'Shoes'},{img:TShirt, Name:'T-Shirts'},{img:Man, Name:'Men Collection'},{img:Sho, Name:'Shoes'},{img:Watch, Name:'T-Shirts'},{img:Man, Name:'Men Collection'},{img:Sho, Name:'Shoes'},{img:TShirt, Name:'T-Shirts'},{img:Man, Name:'Men Collection'},{img:Sho, Name:'Shoes'},{img:Watch, Name:'T-Shirts'},{img:Man, Name:'Men Collection'},{img:Sho, Name:'Shoes'},{img:TShirt, Name:'T-Shirts'},{img:Man, Name:'Men Collection'},{img:Sho, Name:'Shoes'},{img:Watch, Name:'T-Shirts'},{img:Man, Name:'Men Collection'},{img:Sho, Name:'Shoes'}],
    };
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', marginBottom:10,}}>
              <View style={{width:120,height:100,backgroundColor:'',}}>
                <Image source={item.img} resizeMode='contain' style={{width:115,height:100}}/>
              </View>
              <View style={{width:120,height:50,backgroundColor:'lightgray'}}>
                <Text style={{fontSize:15,textAlign:'center',fontWeight:'bold',marginTop:10}}>{item.Name}</Text>
              </View>
            </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    //justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
});