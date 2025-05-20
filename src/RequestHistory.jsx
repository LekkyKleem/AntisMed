import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './RequestHistory.styles';

const RequestHistory = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>История обращений</Text>
      <Button title="Вернуться на главную" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default RequestHistory;
