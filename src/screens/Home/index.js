import React from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './styles';

const HomeScreen = () => {
    return (
        <View>
                
                <Pressable style={styles.searchButton} onPress={() => console.warn('search button')} >
                    <Fontisto size={25} color={"#f15454"} name="search" />
                    <Text style={styles.searchButtonText}>Where are you going?</Text>    
                </Pressable>

            <ImageBackground source={require('../../assets/images/wallpaper.jpg')} style={styles.image} >
                
                <Text style={styles.title}>Go Near</Text>

                <Pressable style={styles.button} onPress={() => console.error('Button clicked')}>
                    <Text style={styles.buttonText}>Explore Nearby Stays!</Text>    
                </Pressable>

            </ImageBackground>
        </View>
    )
}
 

export default HomeScreen;