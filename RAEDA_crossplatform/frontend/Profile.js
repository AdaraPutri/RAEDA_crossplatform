import { 
  StyleSheet, 
  Text,
  SafeAreaView, 
} from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the profile page</Text>
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