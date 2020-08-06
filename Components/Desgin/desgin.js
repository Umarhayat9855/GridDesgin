import React, { Component } from 'react';
import { StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView, Dimensions,Alert, ImageComponent } from 'react-native';
class Desgin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView>
            <View style={{flex: 1, flexDirection: 'column',backgroundColor:'yellow',}}>
                <View style={styles.firstcontainer}>

                </View>
                <View style={styles.Secondcontainer}>

                </View>
                <Text>This is Desgin Screen</Text>
            </View>
            </ScrollView>
         );
    }
}
const styles=StyleSheet.create({    
    firstcontainer:{
        width:'100%',
        height:130,
        marginTop:10,
        backgroundColor:'blue',
        marginBottom:10,
        shadowOpacity: 0.58,
        shadowRadius: 9.00,
        elevation: 16,
    },
    Secondcontainer:{
        width:'100%',
        height:130,
        marginTop:10,
        backgroundColor:'green',
        marginBottom:10,
        shadowOpacity: 0.58,
        shadowRadius: 9.00,
        elevation: 16,
    },
    thirdcontainer:{
        width:'80%',
        height:130,
        marginLeft:'10%',
        marginTop:10,
        backgroundColor:'white',
        marginBottom:10,
        shadowOpacity: 0.58,
        shadowRadius: 9.00,
        elevation: 16,
    },
    ImageContainer:{
        width:'30%',
        height:100,
        marginTop:10,
        marginLeft:10
    },
    secondContainer:{
        width:'65%',
        height:110,
        //backgroundColor:'blue',
        marginTop:10,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
    },
    catagory:{
        fontSize:17,
        fontFamily:'New Roman',
        color:'gray',
        textAlign:'center',
        marginTop:15,
        //fontWeight:'bold',
    },
    price:{
        fontSize:16,
        fontFamily:'New Roman',
        color:'#EE6613',
        marginTop:0,
        fontWeight:'bold',
    },
    plusIcon:{
        width:'25%',
        height:30,
        marginLeft:7,
    },
    Oder:{
        width:'100%',
        height:150,
        backgroundColor:'#DD5D12',
        borderTopStartRadius:50,
        borderTopRightRadius:50,
    },
    OrderText:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        marginTop:20,
        color:'gray',

    }
  });
export default Desgin;