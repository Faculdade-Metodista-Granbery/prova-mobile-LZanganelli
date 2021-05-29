import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import CardQuote from './components/card/card.component';
import {Switch} from 'react-native-paper'
import {colors} from './utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';



const notList = [
  { id: 1, task: 'Suco de gratidão + clorofila', background: 'https://image.freepik.com/free-vector/flat-night-sky-background_23-2148032671.jpg'},
  { id: 2, task: 'Aplaudir o por do sol', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevLH9vqcGBf4kYYXN1sEafET9xBaEjxUOMg&usqp=CAU'},
  { id: 3, task: '5 séries de namastê', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6OUSY2144YwI6mFLlxCKdyvkmKn6yLEoLA&usqp=CAU'},
]

export default function App() {
  const [theme, setTheme] = useState(false)

	const _handleTheme = () => setTheme(!theme)

  const icone = theme ? 'moon-o' : 'sun-o'


  return (

    <SafeAreaView style={[styles.container, {backgroundColor: theme ? colors.dark : colors.light}]}>
      <StatusBar
        animated={true}
        backgroundColor={"#c64242"}
      />
    <View style={{width: '100%', paddingHorizontal: 30, flexDirection: 'row', paddingTop: 10, alignItems: 'center', justifyContent: 'flex-end'}}>
      <Switch style={{marginRight: 5}} value={theme} onValueChange={_handleTheme} />
      <Icon name={icone} size={18} color="#999" />
    </View>

        <FlatList data ={notList}
          CardExtractor={item => item.id}
          renderItem={({ item }) => 
            <CardQuote task ={item.task}
              background={item.background}
              bgColor={theme ? colors.cardDark : colors.cardLight}
              txtColor={theme ? colors.txtDark : colors.txtLight}
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