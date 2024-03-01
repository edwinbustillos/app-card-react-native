import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { AirbnbRating } from '@rneui/themed';

const RatingApp = () => {

    return (
        <>
            <Text style={styles.text}>Minhas Habilidades</Text>
            <Text style={styles.ratingTitle}>Python</Text>
            <AirbnbRating ratingContainerStyle={styles.ratingContainer} isDisabled selectedColor="#007bff" showRating={false} size={20} count={6} defaultRating={6} />
            <Text style={styles.ratingTitle}>Node.JS</Text>
            <AirbnbRating ratingContainerStyle={styles.ratingContainer} isDisabled selectedColor="#007bff" showRating={false} size={20} count={6} defaultRating={6} />
            <Text style={styles.ratingTitle}>React Native</Text>
            <AirbnbRating ratingContainerStyle={styles.ratingContainer} isDisabled selectedColor="#007bff" showRating={false} size={20} count={6} defaultRating={4} />
            <Text style={styles.ratingTitle}>Swift / IOS</Text>
            <AirbnbRating ratingContainerStyle={styles.ratingContainer} isDisabled selectedColor="#007bff" showRating={false} size={20} count={6} defaultRating={4} />
            <Text style={styles.ratingTitle}>Flutter</Text>
            <AirbnbRating ratingContainerStyle={styles.ratingContainer} isDisabled selectedColor="#007bff" showRating={false} size={20} count={6} defaultRating={4} />
        </>
    );
}

const styles = StyleSheet.create({
    ratingContainer: {
        marginTop: 0
    },
    ratingTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    text: {
        fontStyle: 'italic',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 40,
        paddingLeft: 10,
    },
});

export default RatingApp;