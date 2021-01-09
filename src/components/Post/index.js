import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'


export default function Post({post}) {
    console.log(post)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: post.image}} />

            <Text style={styles.bedroom}>{post.bed} bed {post.bedroom} bedroom</Text>

            <Text numberOfLines={2} style={styles.description}>
                {post.type} {post.title}
            </Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}>  ${post.newPrice} </Text>
                / night
            </Text>

            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </View>
    )
}
