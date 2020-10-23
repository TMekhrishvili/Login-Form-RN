import React from 'react';
import LoginForm from './LoginForm';
import { StyleSheet, View, Image, Text } from 'react-native';

const Login = () => {

    return (
        <View style={StyleSheet.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png'
                    }}
                />
                <Text>Log In</Text>
            </View>
            
            <View style={styles.formContainer}>
                <LoginForm />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer: {
        
    },
    logo: {
        width: 150,
        height: 200
    }

})
export default Login