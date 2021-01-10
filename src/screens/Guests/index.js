import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

export default function GuestsScreen() {

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                    <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable style={styles.button} onPress={() => setAdults(Math.max(0,adults - 1))}>
                        <Text style={{fontSize: 22, color: '#474747'}}>-</Text>
                    </Pressable>

                    <Text style={{ marginHorizontal: 18, fontSize: 16}}>{adults}</Text>

                    <Pressable style={styles.button} onPress={() => setAdults(adults + 1)}>
                        <Text style={{fontSize: 22, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Children</Text>
                    <Text style={{ color: '#8d8d8d' }}>Ages 2 to 12</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable style={styles.button} onPress={() => setChildren(Math.max(0,children - 1))}>
                        <Text style={{fontSize: 22, color: '#474747'}}>-</Text>
                    </Pressable>

                    <Text style={{ marginHorizontal: 18, fontSize: 16}}>{children}</Text>

                    <Pressable style={styles.button} onPress={() => setChildren(children + 1)}>
                        <Text style={{fontSize: 22, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Infants</Text>
                    <Text style={{ color: '#8d8d8d' }}>Below age 2</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable style={styles.button} onPress={() => setInfants(Math.max(0,infants - 1))}>
                        <Text style={{fontSize: 22, color: '#474747'}}>-</Text>
                    </Pressable>

                    <Text style={{ marginHorizontal: 18, fontSize: 16}}>{infants}</Text>

                    <Pressable style={styles.button} onPress={() => setInfants(infants + 1)}>
                        <Text style={{fontSize: 22, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

