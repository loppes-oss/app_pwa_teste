import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Feather} from "@expo/vector-icons"
import {NavigationContainer} from '@react-navigation/native'
import { Camera } from './pages/Camera';
import { Main } from './pages/Main';
import { Home } from './pages/Home';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{tabBarIcon : ({color}) => <Feather name="home" size={20} color={color}/>
         }}
        name="Main"
        component={Main} />

        <Tab.Screen
            options={{tabBarIcon : ({color}) => <Feather name="camera" size={20} color={color}/>
        }}
         
          name="Camera"
          component={Camera}
           />
           <Tab.Screen
            options={{tabBarIcon : ({color}) => <Feather name="arrow-up-circle" size={20} color={color}/>
        }}
         
          name="home"
          component={Home}
           />
      </Tab.Navigator>
    </NavigationContainer>
  );
}