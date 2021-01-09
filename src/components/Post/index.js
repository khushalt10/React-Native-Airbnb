import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'


export default function Post() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />

            <Text style={styles.bedroom}>1 bed 1 bedroom</Text>

            <Text numberOfLines={2} style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea ex ipsam iusto nobis. In dolore dolores ea minus nostrum nemo dolorum esse eaque dolor, commodi molestiae, iste, blanditiis id!</Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.newPrice}>  $30 </Text>
                / night
            </Text>

            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}
