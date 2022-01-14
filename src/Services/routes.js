import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Strategy from '../Screens/Strategy';
import Moba from '../Screens/Moba';
import Pvp from '../Screens/Pvp';
import Shooter from '../Screens/Shooter';

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';


export default function Routes() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FF1919',
                tabBarInactiveTintColor: '#FFF',
                headerShown: false,
                tabBarStyle:{
                    paddingBottom: 5,
                    paddingTop: 5,
                    backgroundColor: '#121212',
                    borderTopColor: 'transparent'
                }
            }}
        >
            <Tab.Screen 
                name='Strategy' 
                component={Strategy} 
                    options={{
                        tabBarIcon:({ size, color }) => (
                            <FontAwesome5 name="chess" size={size} color={color} />
                        )
                    }} 
                
                />

            <Tab.Screen 
                name='Moba' 
                component={Moba} 
                options={{
                    tabBarIcon:({ size, color }) => (
                        <MaterialCommunityIcons name="strategy" size={size} color={color} />
                    )
                }} 
                
                
            />

            <Tab.Screen 
                name='Pvp'
                component={Pvp}
                options={{
                    tabBarIcon:({ size, color }) => (
                        <MaterialCommunityIcons name="sword-cross" size={size} color={color} />
                    )
                }} 
            />

            <Tab.Screen 
                name='Shooter' 
                component={Shooter} 
                options={{
                    tabBarIcon:({ size, color }) => (
                        <MaterialCommunityIcons name="pistol" size={size} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    );
}