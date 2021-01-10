import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import DestinationSearchScreen from '../screens/DestinationSearch'
import GuestsScreen from '../screens/Guests'
import HomeTabNavigator from './HomeTabNavigator'
import SearchResultScreen from '../screens/SearchResults'

const Stack = createStackNavigator()

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} options={{ headerShown: false}} component={HomeTabNavigator} />
                <Stack.Screen name={"Destination Search"} options={{ title: "Search your destination"}} component={DestinationSearchScreen}  />
                <Stack.Screen name={"Guest Screen"} component={GuestsScreen} options={{ title: "How many people?"}} />
                <Stack.Screen name={"Search Results"} component={SearchResultScreen} options={{ title: "Your Search Results"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
