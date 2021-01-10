import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        borderColor: '#676767',
        borderWidth: 1,
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingVertical: 20, 
        marginHorizontal: 20 , 
        borderBottomColor: 'lightgray', 
        borderBottomWidth: 1 
    }
})

export default styles