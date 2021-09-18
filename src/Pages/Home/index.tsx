import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput } from 'react-native';
import { styleLinksHeader, styleOneLinkHeader, styles } from './Styles';

const OneLinkHeader = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
        </View>
    );
};

const LinksHeader = ()=>{
    return(
        <View style={styleLinksHeader.container}>
            {/* <Text style={{color:"#4A4A4C"}}>Home</Text>
            <Text style={styleLinksHeader.link}>Post</Text>
            <Text>Videos</Text>
            <Text>Photos</Text>
            <Text>Community</Text> */}
            <OneLinkHeader nome="Home"/>
            <OneLinkHeader nome="Post"/>
            <OneLinkHeader nome="Videos"/>
            <OneLinkHeader nome="Photos"/>
            <OneLinkHeader nome="Community"/>
        </View>
    );
};



const Home = () => {
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image source={
                    require("../../assets/arrow-left.png")
                    }>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../assets/ei_search.png")
                        }>
                    </Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        >
                        

                    </TextInput>
                </View>
                <Image source={
                    require("../../assets/share.png")
                    }>
                </Image>
            </View>
            <LinksHeader></LinksHeader>


        </View>
    );

}


export default Home;