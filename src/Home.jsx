import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Home.styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Главное меню</Text>

      <TouchableOpacity onPress={() => navigation.navigate('PriemScreen')} style={styles.button}>
        <Text style={styles.buttonText}>📅 Записаться на приём</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {navigation.navigate('CallDoctorScreen')}} style={styles.button}>
        <Text style={styles.buttonText}>🏠 Вызвать врача на дом</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AnaliseResultScreen')} style={styles.button}>
        <Text style={styles.buttonText}>📊 Анализ результатов</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace('LoginScreen')} style={styles.button}>
        <Text style={styles.buttonText}>🔙 Выйти из аккаунта</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
