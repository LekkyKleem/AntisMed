import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './CallDoctor.styles';

const CallDoctor = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleCallDoctor = () => {
    if (!fullName || !address || !phone) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля.');
      return;
    }

    Alert.alert('Успех', `Врач вызван по адресу:\n${address}\nПациент: ${fullName}\nТел: ${phone}`);
    // Здесь можно отправить данные на сервер или сбросить форму
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Вызов врача на дом</Text>
      <TextInput
        style={styles.input}
        placeholder="ФИО пациента"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Адрес"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={styles.input}
        placeholder="Телефон"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleCallDoctor}>
        <Text style={styles.buttonText}>Вызвать врача</Text>
      </TouchableOpacity>

      <View style={styles.NextButtonContainer} >
      <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('PriemScreen')}>
        <Text style={styles.NextButtonText}>📅 Записаться на приём</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('AnaliseResultScreen')}>
        <Text style={styles.NextButtonText}>📋 Результаты анализов</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
  );
};

export default CallDoctor;
