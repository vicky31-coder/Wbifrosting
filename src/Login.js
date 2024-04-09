import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
 
export default function App() {
    const [username, setusername] = useState("");
 
    return (
        <SafeAreaView>
            <Text style={styles.title}>Wbifrost</Text>
            <Text style={styles.basetext}>For your place weather information</Text>
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
    title: {
        fontSize: 40,
        color: "#000",
        marginTop: '80%',
        marginHorizontal: '28%',
        fontWeight: "bold"
    },
    basetext:{ 
        fontSize: 20,
        marginHorizontal:'9.4%'
    },
    input: {
        padding: 10,
        width: "80%",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        marginHorizontal: '10%',
        marginTop: '5%'
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