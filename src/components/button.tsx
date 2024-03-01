import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';

interface ButtonAppProps {
    onPress: () => void;
    iconName: string;
    iconColor?: string;
    titulo?: string;
    backgroundColor?: string;
}

const ButtonApp = ({onPress,iconName,iconColor,titulo,backgroundColor}:ButtonAppProps) => {
  return (
    <Button
        icon={<Icon name={iconName} style={styles.iconContainer} type="font-awesome" color={iconColor} />}
        title={titulo}
        buttonStyle={[styles.buttonApp, {backgroundColor: backgroundColor}]}
        style={styles.button}
        onPress={onPress}
      />
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
  },
  buttonApp: {
    borderRadius: 10,
  },
  button: {
    width: 200,
    marginBottom: 10,
  }
});

export default ButtonApp;