import React from 'react'
import { FlatList, Text, View } from 'react-native'
import feed from '../../assets/data/feed'
import Post from '../../components/Post'

export default function SearchResultScreen() {
    return (
        <View>
            <FlatList 
                data={feed}
                renderItem={ ({item}) => <Post post={item} />}
            />
        </View>
    )
}
