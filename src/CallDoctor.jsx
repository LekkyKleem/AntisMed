import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './CallDoctor.styles';

const CallDoctor= ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Вызвать врача на дом</Text>
      <Button title="Вернуться на главную" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default CallDoctor;
