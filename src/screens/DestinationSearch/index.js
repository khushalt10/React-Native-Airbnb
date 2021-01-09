import React, { useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import styles from './styles'
import searchResult from '../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'

export default function DestinationSearchScreen() {

    const [inputText, setInputText] = useState('')

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                value={inputText}
                onChangeText={setInputText}
                placeholder={"Where are you going?"}
            />

            <FlatList 
                data={searchResult}
                renderItem={({item}) => 
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} />
                        </View>
                        <Text style={styles.location}>{item.description}</Text>
                    </View>
                    }
            />
        </View>
    )
}

