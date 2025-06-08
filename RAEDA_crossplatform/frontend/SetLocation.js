import { 
  StyleSheet, 
  Text,
  SafeAreaView, 
} from 'react-native';

export default function SetLocation() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the location page</Text>
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