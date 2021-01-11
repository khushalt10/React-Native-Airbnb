import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home'
import SearchResultScreen from '../screens/SearchResults'

const Stack = createStackNavigator()

export default function ExploreNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name={"SearchResults"}
                component={SearchResultScreen}
                options={{
                    title: 'Search your destination',
                }}
            />
        </Stack.Navigator>
    )
}
