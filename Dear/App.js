import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen';
import Calendar from './screens/calendarScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Custom from './screens/custom';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Custom') {
                    iconName = focused ? 'ios-color-palette' : 'ios-color-palette';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-settings' : 'ios-settings';
                  }else if (route.name === 'Home') {
                    iconName = focused ? 'ios-home' : 'ios-home';
                  }else if (route.name === 'Calendar') {
                    iconName = focused ? 'ios-calendar' : 'ios-calendar';
                  }else if (route.name === 'Create') {
                    iconName = focused ? 'ios-brush' : 'ios-brush';
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
        <Tab.Screen name="Custom" component={Custom} />
        <Tab.Screen name="Settings" component={HomeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Create" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};