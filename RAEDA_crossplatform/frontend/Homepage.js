import { enableScreens } from 'react-native-screens';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

enableScreens();

// import the other pages' components for navigation
import Profile from './Profile';
import Results from './Results';
import Saved from './Saved';
import SetLocation from './SetLocation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SearchStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="DefaultHome" component={SearchScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SetLocation" component={SetLocation} options={{ headerTitle: ''}}/>
      <Stack.Screen name="Results" component={Results}/>
    </Stack.Navigator>
  )
}

function SearchScreen({ navigation }) {
  return(
    <SafeAreaView style={styles.container}>
      <Button title="Set Location" onPress={() => navigation.navigate('SetLocation')}/>
      <Button title="Results" onPress={() => navigation.navigate('Results')}/>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Search' 
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#8F0FA2', 
          tabBarInactiveTintColor: 'gray', 
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 12},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Saved') {
              iconName = focused ? 'star' : 'star-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          })}>
        <Tab.Screen name="Saved" component={Saved} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchStack} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
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
