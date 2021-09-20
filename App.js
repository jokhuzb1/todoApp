import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { PickerIOSComponent, StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AddTodos from './components/AddTodos';
import Header from './components/Header'
import TodoItem from './components/ToDoItem';
import Footer from './components/footer';


export default function App() {
  
const [todos, setTodos] = useState([
  {text:'buy a coffee', key:'1'},
  {text:'create an app', key:'2'},
  {text:'play on the switch', key:'3'},
  

])

const pressHanlder = (key) =>{
  setTodos((prevTodos)=>{
    return prevTodos.filter(todo =>todo.key != key)
  })
}
const  submitHandler = (text) => {
  if(text.length > 3){
    setTodos((prevTodos)=>{
        return[ 
          {text, key:Math.random().toString()}, ...prevTodos]
    })
  }
  else{
    Alert.alert('Oops', 'Todos must be over 3 chars long',[
      {text:'OK', onPress:()=>{console.log('alert is closed')}}
    ])
  }
  
}
 

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed')
    }}>

    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
        {/* to do Form */}
        <AddTodos submitHandler={submitHandler}/>
        <View style={styles.list}>
          {/* iterating list */}
          <FlatList
            data={todos}
            renderItem={({item})=>(
             <TodoItem  item={item}
             pressHanlder={pressHanlder}
             />

              )}
          />
        </View>
      </View>
       <Footer/>       
    </View>
    </TouchableWithoutFeedback>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
    backgroundColor: '#fff',
 
  },
  content:{
    padding:40,
    flex:1,
  },
  list:{
    marginTop:20,
    flex:1,
  }
});
