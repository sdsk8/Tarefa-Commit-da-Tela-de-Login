import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { Linking } from 'react-native';
import { stylePagina } from './Styles';

const Login = () => {
    return(

        
        <View style={stylePagina.container}>

            <View style={stylePagina.logo}>
            <Image style={{height:50, width:50, }} source={
                    require("../../assets/facebook-icone-icon.png")
                    }></Image>
          
            
           
                 
                 <View><Text style={{ color:"white",fontSize: 50, paddingHorizontal:10, marginTop: -9}}>Facebook</Text></View>  
        </View>

            <View style={stylePagina.inputs}>
                <TextInput
                        style={stylePagina.textInput}
                        placeholder="Usuario"
                        placeholderTextColor="#808080"
                        >
                        

                    </TextInput>

           
                        

            </View>

            <View style={stylePagina.inputs}>
            <TextInput
                        style={stylePagina.textInput}
                        placeholder="Senha"
                        placeholderTextColor="#808080"
                        >
                        

                    </TextInput>

           
                        

            </View>

            <View style={stylePagina.botao}>
                <Button title="Logar"></Button>

            </View>
            <View style={stylePagina.link}>
            <Text  onPress={() => Linking.openURL('http://google.com')} style={{color:"white"}}>Inscrever-se</Text>
                 </View>  
                
              

</View>

         
       
            


        
    );
    

}

export default Login;