import { 
  StyleSheet, 
  Text,
  Alert, 
  Button, 
  SafeAreaView, 
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button title="Click Me" onPress={() => console.log("Button clicked")}/>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: '#1d011f' }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
