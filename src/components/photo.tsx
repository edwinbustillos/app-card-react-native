import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Foto from '../../assets/foto.jpg';

const PhotoUser = () => {
  return(
    <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={Foto}
        />
      </View>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        borderWidth: 6,
        borderColor: '#c4c4c4',
        borderRadius: 100,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default PhotoUser;