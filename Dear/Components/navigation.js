import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './homeScreen';
import Calendar from './calendarScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Custom from './custom';
import Realmtest from './realmtest';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
              initialRouteName='Home'
              backBehavior='Home'
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
                  return <Ionicons name={iconName} size={30} color={color} />;
                },
              })
            }
              activeColor='black'
              inactiveColor='grey'
              barStyle={{ backgroundColor: 'white'}}
            >
        <Tab.Screen name="Custom" component={Custom} />
        <Tab.Screen name="Settings" component={Realmtest} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Create" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};