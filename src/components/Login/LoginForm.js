import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
            />
            <TextInput
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        width: 300,
        height: 40,
        marginBottom: 15,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: '#0a2e2e',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#000',
        paddingVertical: 10,

        fontWeight: 'bold',

    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
})
export default LoginForm