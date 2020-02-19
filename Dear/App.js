import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen';
import Calendar from './screens/calendarScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = focused ? 'ios-color-palette' : 'ios-color-palette';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
                  }else if (route.name === 'ADD') {
                    iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
                  }else if (route.name === 'add') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                  }else if (route.name === 'remove') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
              }}
            >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Calendar} />
        <Tab.Screen name="ADD" component={HomeScreen} />
        <Tab.Screen name="add" component={HomeScreen} />
        <Tab.Screen name="remove" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};