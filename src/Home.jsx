import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Home.styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Главное меню</Text>
      <Button title="📅 Записаться на приём" onPress={() => navigation.navigate('PriemScreen')} />
      <Button title="🏠 Вызвать врача на дом" onPress={() => {}} />
      <Button title="📄 История обращений" onPress={() => {}} />
      <Button title="🔙 Выйти из аккаунта" onPress={() => navigation.replace('LoginScreen')} />
    </View>
  );
};

export default Home;
