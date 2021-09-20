import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Footer(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Coryright 2021</Text>
            <Text style={styles.p}>Created by Johan Mirzaakhmedov</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    
    header:{
        height:60,
            backgroundColor:'tomato'

    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:13,
        marginTop:10
    },
    p:{
        textAlign:'center',
        fontSize:9,
        color:'#fff'
    }

})