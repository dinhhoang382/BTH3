import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RNTouchableOpacity = () => {
    return (
        <TouchableOpacity
            onPress={handleGoogleSignIn}
            style={styles.googleSignInButton}
        >
            <View style={styles.buttonContent}>
                <Image source={GoogleSignInImage} style={styles.buttonImage} />
                <Text style={styles.buttonText}>Sign in with Google</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TouchableOpacity

const styles = StyleSheet.create({
    googleSignInButton: {
        backgroundColor: '#4285F4',
        borderRadius: 5,
        padding: 10,
    },
    buttonContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonImage: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    buttonText: {
        color: 'white', // Customize the text color.
        fontWeight: 'bold',
    },
})