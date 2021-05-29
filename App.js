import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import CardQuote from './components/card/card.component';
import {Switch} from 'react-native-paper'

const notList = [
  { id: 1, task: 'Suco de gratidão + clorofila', background: 'https://image.freepik.com/free-vector/flat-night-sky-background_23-2148032671.jpg'},
  { id: 2, task: 'Aplaudir o por do sol', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevLH9vqcGBf4kYYXN1sEafET9xBaEjxUOMg&usqp=CAU'},
  { id: 3, task: '5 séries de namastê', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6OUSY2144YwI6mFLlxCKdyvkmKn6yLEoLA&usqp=CAU'},
]

export default function App() {
  const [theme, setTheme] = useState(false)

	const _handleTheme = () => setTheme(!theme)


  return (

    <SafeAreaView style={[styles.container, {backgroundColor: theme ? '#444444' : '#EBF5F7'}]}>
      <StatusBar
        animated={true}
        backgroundColor={"#c64242"}
      />
		<Switch value={theme} onValueChange={_handleTheme} />

        <FlatList data ={notList}
          CardExtractor={item => item.id}
          renderItem={({ item }) => 
            <CardQuote task ={item.task}
              background={item.background}
            />
          }
        /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});