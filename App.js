// import React, { Component } from 'react';
// import {AppRegistry, StyleSheet,TouchableHighlight, TouchableOpacity,FlatList, Image, Text, View, ScrollView, Dimensions,Alert, ImageComponent,ImageBackground,TextInput} from 'react-native';
// import DropDownItem from "react-native-drop-down-item";
// import Menu from './Images/Homepage/Group8.png';
// import Logo1 from './Images/Homepage/l1.png';
// import Plus from './Images/Homepage/Group78.png';
// import drop from './Images/Homepage/Polygon1.png';
// import Check from './Images/Homepage/Group79.png';
// import BGImage from './Images/Homepage/MaskGroup1.png';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       contents: [
//         {
//           title: "Title 1",
//           body: "Hi. I love this component. What do you think?"
//         },
//         {
//           title: "See this one too",
//           body: "Yes. You can have more items."
//         },
//         {
//           title: "Thrid thing",
//           body:
//             "What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?"
//         }
//       ]
//      }
//   }
//   render() { 
//     return ( 
//       <ScrollView>
//       <View style={{flex: 1, flexDirection: 'column',backgroundColor:'white',marginBottom:10}}>
//           <View style={styles.firstcontainer}>
          
//           <View style={{flexDirection:'row'}}>
//           <View style={{flexDirection:'column',height:170,width:130,backgroundColor:''}}>
//           <Image source={Menu} style={{marginLeft:20,width:45,height:35,marginTop:100,marginBottom:10}}/>
//           </View>
//           <View style={{flexDirection:'column',height:170,width:180,backgroundColor:'',}}>
            
//           <Image source={Logo1}  style={{marginTop:20,width:150,height:150,}}/>
//           </View>
//           <View style={{flexDirection:'column',height:170,width:100,backgroundColor:''}}>
//           <View style={{flexDirection:'row',marginLeft:-10,marginTop:125}}>
//           <View style={{flexDirection:'column',height:30,width:25,backgroundColor:''}}>
//             <Image source={Plus}/>
//           </View>
//           <View style={{flexDirection:'column',height:30,width:25,backgroundColor:''}}>
//             <Text style={{color:'white',fontSize:20}}>DE</Text>
//           </View>
//           <View style={{flexDirection:'column',height:30,width:30,backgroundColor:''}}>
//           <Image source={drop} style={{width:20,height:10,marginTop:10,marginLeft:5}}/>
//           </View>
//           </View>
//           </View>
//           </View>
//           </View>
//           <View style={styles.Secondcontainer}>
//             <ImageBackground source={BGImage} style={styles.image}>
//               <View style={{width:180,}}><Text style={{color:'white',fontSize:25}}>Meet New and Interesting People</Text></View>
//               <View  style={{width:140,marginTop:10}}><Text style={{color:'white',fontSize:17}}>join myHandicap Dating where you could meet anyone anywhere</Text></View>
//             </ImageBackground>
//           </View>


//           <View style={styles.Thirdcontainer}>
//             <View style={{flexDirection:'row',marginTop:20}}>
//               <View style={{flexDirection:'column',height:50,width:150,backgroundColor:'white',marginLeft:20,borderRadius:30}}>
//                 <Text style={{fontSize:20,textAlign:'center',color:'#D980B0',marginTop:10,fontWeight:'bold'}}>Gettting Start</Text>
//               </View>
//               <View style={{flexDirection:'column',height:50,width:100,marginTop:15,marginLeft:50}}>
//                 <Text style={{textAlign:'center',fontSize:17,color:'white',fontWeight:'bold'}}>Learn More</Text>
//               </View>
//             </View>
//           </View>



//           <View style={styles.Fourcontainer}>
//           <View style={{flexDirection:'column',}}>
//           <View style={{flexDirection:'row',marginTop:10}}>
//               <View style={{flexDirection:'column',height:120,width:150,backgroundColor:'',marginLeft:10,borderRadius:30}}>
//               <View style={{marginLeft:15,marginTop:8}}>
//               <View style={{flexDirection:'row',width:120,height:15,backgroundColor:''}}>
//                 <Text style={{color:'white'}}>I am a:</Text>
//               </View>
//               <View style={{flexDirection:'row',width:120,height:30,backgroundColor:''}}>
//                 <TextInput placeholder="Male" style={{width:110,height:35,backgroundColor:'',borderRadius:20}} underlineColorAndroid={'#cccccc'}/>
//               </View>
//               <View style={{flexDirection:'row',width:120,height:15,backgroundColor:''}}>
//               <Text style={{color:'white'}}>I am looking for a:</Text>
//               </View>
//               <View style={{flexDirection:'row',width:120,height:30,backgroundColor:''}}>
//               <TextInput placeholder="Female" style={{width:110,height:35,backgroundColor:'',borderRadius:20}} underlineColorAndroid={'#cccccc'}/>
//               </View>
              
//             </View>
//             </View>
//             <View style={{flexDirection:'column',height:120,width:150,backgroundColor:'',marginLeft:10,borderRadius:30}}>
//             <View style={{marginLeft:15,marginTop:8}}>
//             <View style={{flexDirection:'row',width:120,height:15,backgroundColor:''}}>
//                 <Text style={{color:'white'}}>Between ages:</Text>
//               </View>
//               <View style={{flexDirection:'row',width:120,height:30,backgroundColor:''}}>
//               <TextInput placeholder="20" style={{width:110,height:35,backgroundColor:'',borderRadius:20}} underlineColorAndroid={'#cccccc'}/>
//               </View>
//               <View style={{flexDirection:'row',width:120,height:15,backgroundColor:''}}>
//               <Text style={{color:'white'}}>and:</Text>
//               </View>
//               <View style={{flexDirection:'row',width:120,height:30,backgroundColor:''}}>
//               <TextInput placeholder="30" style={{width:110,height:35,backgroundColor:'',borderRadius:20}} underlineColorAndroid={'#cccccc'}/>
//               </View>
//             </View>
//               </View>
//             </View>
//             <TouchableOpacity style={{width:140,height:40,backgroundColor:'white',borderRadius:30,marginLeft:95,marginTop:5}}>
//                 <Text style={{marginLeft:35,marginTop:8,fontSize:17,fontWeight:'bold',color:'#D980B0'}}>Lets Start</Text>
//               </TouchableOpacity>
//           </View>
          
//           </View>
//           <View style={styles.Fivecontainer}>
//             <View style={{flexDirection:'column',}}>
//               <View style={{flexDirection:'row',width:100,height:7,backgroundColor:'#E10066',marginLeft:150,marginTop:10,borderRadius:20}}>

//               </View>
//             <View style={{flexDirection:'row',marginTop:10,}}>
//               <Text style={{fontSize:22,marginLeft:40,color:'#D980B0',fontWeight:'bold'}}>How my Handicap Dating Work </Text>
//             </View>
//             </View>
//           </View>


//           <View style={styles.Sexcontainer}>
//             <View style={styles.ImageContainer}>
//               <Image source={Check} style={{marginTop:-25,marginLeft:170}}/>
//             </View>
//           </View>
//           {/* <Text>This is Desgin Screen</Text> */}
//       </View>
//       </ScrollView>
//      );
//   }
// }

// const styles=StyleSheet.create({    
//   firstcontainer:{
//       width:'100%',
//       height:170,
//       marginTop:5,
//       backgroundColor:'#BCE2F1',
//       // shadowOpacity: 0.58,
//       // shadowRadius: 9.00,
//       // elevation: 16,
//   },
//   Secondcontainer:{
//       width:'100%',
//       height:250,
//       backgroundColor:'#D980B0',
//       // shadowOpacity: 0.58,
//       // shadowRadius: 9.00,
//       // elevation: 16,
//   },
//   Thirdcontainer:{
//     width:'100%',
//     height:120,
//     backgroundColor:'#F396C0',
//     // shadowOpacity: 0.58,
//     // shadowRadius: 9.00,
//     // elevation: 16,
//   },
//   Fourcontainer:{
//       width:'86%',
//       height:190,
//       marginTop:-20,
//       marginLeft:'7%',
//       backgroundColor:'#E10066',
//       shadowOpacity: 0.58,
//       shadowRadius: 9.00,
//       elevation: 16,
//       borderRadius:25
//   },
//   Fivecontainer:{
//     width:'100%',
//     height:120,
//     marginTop:10,
//     shadowOpacity: 0.58,
//     shadowRadius: 9.00,
//     elevation: 16,
//   },
//   Sexcontainer:{
//     width:'100%',
//     height:50,
//     backgroundColor:'#BCE2F1',
//     shadowOpacity: 0.58,
//     shadowRadius: 9.00,
//     elevation: 16,
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     opacity: 0.45
//   },
//   ImageContainer:{
//       width:'30%',
//       height:100,
//       marginTop:10,
//       marginLeft:10
//   },
//   secondContainer:{
//       width:'65%',
//       height:110,
//       //backgroundColor:'blue',
//       marginTop:10,
//       borderTopRightRadius:5,
//       borderBottomRightRadius:5,
//   },
//   catagory:{
//       fontSize:17,
//       fontFamily:'New Roman',
//       color:'gray',
//       textAlign:'center',
//       marginTop:15,
//       //fontWeight:'bold',
//   },
//   price:{
//       fontSize:16,
//       fontFamily:'New Roman',
//       color:'#EE6613',
//       marginTop:0,
//       fontWeight:'bold',
//   },
//   plusIcon:{
//       width:'25%',
//       height:30,
//       marginLeft:7,
//   },
//   Oder:{
//       width:'100%',
//       height:150,
//       backgroundColor:'#DD5D12',
//       borderTopStartRadius:50,
//       borderTopRightRadius:50,
//   },
//   OrderText:{
//       textAlign:'center',
//       fontSize:25,
//       fontWeight:'bold',
//       marginTop:20,
//       color:'gray',

//   }
// });
// export default App;

import React, { Component } from 'react';
import { AppRegistry,View , Text} from 'react-native';
import List from './Components/Desgin/list';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }
  render() { 
    return (  
      <View>
        {/* <Text>baseveaevie</Text> */}
        <List/>
      </View>
    );
  }
}
 
export default App;