import React, {useState} from 'react';
import { StyleSheet, View,Text, TextInput, Button} from 'react-native';


const AddTodos = ({submitHandler}) => {
    const [text, setText] = useState('');

    const changeHandler=(value)=>{
        setText(value)
        value=""
    }
    const empty = (text)=>{
        
        submitHandler(text)
        
    }
    return ( 
        <View>
            <TextInput
            style={styles.input}
            placeholder="new todo..."
            onChangeText={(value)=>changeHandler(value)}
            clearButtonMode='always'
            />
            <Button style={styles.btn} onPress={()=>empty(text) }  title='add to do' color='coral'/>
        </View>
     );
}
 
export default AddTodos;

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
    btn:{
        borderWidth:1,
        backgroundColor:'blue',
        borderBottomColor:'green'
    }
})