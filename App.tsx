import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const OnelinkHeader = (props:any) =>{
  return(
    <View>


  <Text style={StyleOnelinkHeader.links}>{props.name} </Text>
      
    </View>


  );
};

const StyleOnelinkHeader = StyleSheet.create({
  links: {
    color: '#4A4A4A',

    

  },

});

const LinksHeader = () => {
  return (
    <View style={StyleLinksHeader.container}>

      <OnelinkHeader name="Home"/>
      <OnelinkHeader name="Posts"/>
      <OnelinkHeader name="Videos"/>
      <OnelinkHeader name="Photos"/>
      <OnelinkHeader name="Community"/>


    </View>



  );
};

const StyleLinksHeader = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    color: 'black',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomColor: '#ababab',
    borderBottomWidth: 0.2,

    

  },

});


const Bloco = () =>{
  return(

      <View style={styleBloco.container}>
<View style={styleBloco.bloco}>
<Image source={require('./src/assets/link-like.png')}/>
<Text style={styleBloco.textview}  >Like</Text>
</View>
<View style={styleBloco.bloco}>
<Image source={require('./src/assets/link-coment.png')}/>
<Text style={styleBloco.textview}  >Comment</Text>
</View>
<View style={styleBloco.bloco}>
<Image source={require('./src/assets/link-share.png')}/>
<Text style={styleBloco.textview} >Share</Text>
</View>

      </View>


  );

  

};

const styleBloco = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,

    

  },
  
  textview:{
    marginLeft: 10,
    marginTop: 2,

  },


  bloco:{
    flexDirection: 'row',
    color:'black',
    fontSize: 35,
    textAlign: 'center',
    fontFamily:'arial',
    paddingHorizontal: 20,

  
   
  },

});


export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />


      <View style={styles.header}>
      <Image source={require('./src/assets/arrow-left.png')}/>

        <View style={styles.inputTextView}>

        <Image source={require('./src/assets/ei_search.png')}/>

          <TextInput style={styles.inputText} placeholderTextColor="#F4FFFF" placeholder="Pesquisa"></TextInput>
        </View>

        <Image source={require('./src/assets/share.png')}/>



      </View>

      <LinksHeader></LinksHeader>
      <Bloco></Bloco>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',

  },


  inputText: {

    flex: 1,
    paddingRight: 10,


  },

  inputTextView: {

    backgroundColor: '#2C4887',
    width: 225,
    height: 50,
    borderRadius: 28,
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',



  },

  header: {
    marginTop:25,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#1261A0',
    minHeight: 50,
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,


  },

});
