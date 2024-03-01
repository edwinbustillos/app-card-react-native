import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, Text } from '@rneui/themed';
import PhotoUser from '../components/photo';
import ButtonApp from '../components/button';

export default function MainScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <PhotoUser />
      <Text style={styles.text}>Edwin Bustillos</Text>
      <ButtonApp iconName='linkedin' iconColor='#fff' titulo='Linkedin' backgroundColor='#007bff' onPress={() => navigation.navigate('Skills')} />
      <ButtonApp iconName='github' iconColor='#fff' titulo='GitHub' backgroundColor='#0c0c0c' onPress={() => navigation.navigate('Skills')} />
      <ButtonApp iconName='envelope' iconColor='#fff' titulo='E-Mail' backgroundColor='#a610dc' onPress={() => navigation.navigate('Skills')} />
      <Divider style={{ backgroundColor: '#ccc', height: 1, marginVertical: 10 }} />
      <ButtonApp iconName='chevron-right' iconColor='#fff' titulo='Skills' backgroundColor='#3a3a3a' onPress={() => navigation.navigate('Skills')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  text: {
    fontStyle: 'italic',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
    paddingLeft: 10,
  },
});