import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [task, setTask] = useState([]);


  function handleAddItem() {
    setTask([...task, item]);
    setItem('');
  }

  function handleInputText(text) {
    setItem(text);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="PROJEKT PMA"
        />

        <Button title="ADD" onPress={() => console.log('ADD')} />

        <Text>UDALOST</Text>
      </View>

      <View style={styles.udalosti}>
        task.map((i) => (
        <Text>
          ({i})

        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    borderWidth: 3,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black',
    padding: 8,
  },
  udalosti: {
    flex: 2,
    backgroundColor: 'lightblue',
    padding: 10,
  },
});