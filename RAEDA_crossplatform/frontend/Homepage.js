import { 
  StyleSheet, 
  Text,
  Alert, 
  Button, 
  SafeAreaView, 
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Set Location" onPress={() => console.log("Button clicked")}/>
      <Button title="Profile"/>
      <Button title="Results"/>
      <Button title="Saved"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
