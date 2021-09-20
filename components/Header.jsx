import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    
    header:{
        height:120,
        paddingTop:38,
        backgroundColor:'tomato'

    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        marginTop:30
          
        
    },

})