import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      tinggi:0,
      lebar:0

    };
  }

  render() {
    return (  
      <View style = {{flex:1,backgroundColor:'#d6d6c2'}}>

        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#808080'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />
             <TextInput style = {{height: 40}}
              placeholder="Masukkan  lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                Volume: (this.state.panjang*this.state.tinggi*this.state.lebar)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#e0e0d1'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              panjang =  {this.state.panjang} {"\n"}
              Tinggi =  {this.state.tinggi} {"\n"}
              lebar = {this.state.lebar}{"\n"}
              Volume =  {this.state.Volume} 
          </Text>
         </View>
      
   </View> 

    );
  }

}
