import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Priem.styles';

const Priem = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Записаться на приём</Text>
      <Button title="Вернуться на главную" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Priem;
