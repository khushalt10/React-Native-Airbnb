import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultScreen from '../screens/SearchResults'

const Tab = createMaterialTopTabNavigator()

export default function SearchResultsTabNavigator() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen 
                name={"list"} 
                component={SearchResultScreen} 
            />
            <Tab.Screen 
                name={"map"} 
                component={SearchResultScreen} 
            />
            
        </Tab.Navigator>
    )
}
