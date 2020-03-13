import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../../Controller/colorsController';
import HomeScreen from '../homeScreen/index';
import Calendar from '../calendarScreen/index';
import Diary from '../diaryScreen/index';
import Emotion from '../emotionScreen/index';
import ImageScreen from '../imageScreen/index';

const Stack = createStackNavigator();

function HomeStack(){
  return(
    <Stack.Navigator mode="modal"
      screenOptions={{
        headerTintColor: Colors[0].HEADERCOLOR,
        headerStyle: { backgroundColor: 'red' } 
      }}>
        <Stack.Screen 
          options={{ headerShown: false }}
          name="Home" 
          component={HomeScreen}/>
        <Stack.Screen 
          name="ImageScreen" 
          component={ImageScreen}/>
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
              initialRouteName='Home'
              backBehavior='initialRouteName'
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                  let iconName;
                  
                  if (route.name === 'Diary') {
                    iconName = focused ? 'pencil' : 'pencil-outline';
                  } else if (route.name === 'Emotion') {
                    iconName = focused ? 'emoticon-excited' : 'emoticon-excited-outline';
                  }else if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                  }else if (route.name === 'Calendar') {
                    iconName = focused ? 'calendar-month' : 'calendar-month-outline';
                  }else if (route.name === 'Create') {
                    iconName = focused ? 'brush' : 'brush';
                  }
                  return <MaterialCommunityIcons name={iconName} size={26} color={color} />;
                },
              })
            }
              activeColor='white'
              inactiveColor='grey'
              barStyle={{ backgroundColor: 'black'}}
            >
    
        <Tab.Screen name="Diary" component={Diary} />
        <Tab.Screen name="Emotion" component={Emotion} />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Create" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};