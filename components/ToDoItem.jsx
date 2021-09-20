import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item, pressHanlder}){

    return(
        <TouchableOpacity onPress={()=>pressHanlder(item.key)}>
            <View style={styles.item}>
                <MaterialIcons
                 name='delete' size={18} color='#333'/>
            <Text style={styles.itemText} > {item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        


    },
    itemText:{
    marginLeft:10

    }
})