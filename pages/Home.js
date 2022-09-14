import { Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useStore } from '../lib/Store';

export default function HomeScreen() {
  const { state, setState, styles } = useStore();

  useEffect(() => {
    console.log('HomeScreen: useEffect');
    setTimeout(() => {
      setState({ isLoading: false });
    }, 1500);
  }, []);

  if (state.isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hey, im Home.js</Text>
      <Text>My status bar is light</Text>
      <Text>Today is {new Date().toLocaleString()}</Text>
      <Button title='Im a button' />
      <StatusBar style='light' />
    </View>
  );
}
