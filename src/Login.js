import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
 
export default function App() {
    const [username, setusername] = useState("");
 
    return (
        <SafeAreaView>
            <View style={styles.titlecon}>
                <Text style={styles.title}>Wbifrost</Text>
            </View>
            <View style={styles.basetextcon}>  
                <Text style={styles.basetext}>For your place weather information</Text>
            </View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(text) => setusername(text)}
                keyboardType="default"
                style={styles.input}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({
    titlecon: {
        width: '100%',
        height: '10%',
        marginTop: '70%',
    },            
    title: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold",
        textAlign: 'center'
    },
    basetextcon: {
        width:'100%',
        height: '10%',
        marginTop:'-2.5%'
    },
    basetext:{ 
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        padding: 10,
        width: "80%",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        marginHorizontal: '10%',
    },
    button: {
        backgroundColor: '#87CEEB',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        maxWidth: 150,
        marginHorizontal:'35%'
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    }
});