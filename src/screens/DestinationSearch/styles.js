import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    textInput: {
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        borderRadius: 10,
        padding: 7,
        marginRight: 15
    },
    location: {
        fontWeight: '600'
    }
})

export default styles