import { 
  StyleSheet, 
  Text,
  SafeAreaView, 
} from 'react-native';

export default function Results() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the Results page</Text>
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