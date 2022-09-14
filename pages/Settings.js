import { Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useStore } from '../lib/Store';

export default function SettingsScreen() {
  const { state, setState, styles } = useStore();

  return (
    <View style={styles.container}>
      <Text>Hey, im Settings.js</Text>
      <Text>My status bar is dark</Text>
      <Button title='Im a button' />
      <StatusBar style='dark' />
    </View>
  );
}
