import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, Image } from 'react-native';
import styles from './CallDoctor.styles';
import CustomText from './CustomText';

const CallDoctor = ({ navigation, route }) => {
  const { iin } = route.params || {};

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleCallDoctor = () => {
    if (!fullName || !address || !phone) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля.');
      return;
    }

    Alert.alert('Успех', `Врач вызван по адресу:\n${address}\nПациент: ${fullName}\nТел: ${phone}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={styles.profileBtn}
          onPress={() => navigation.navigate('ProfileScreen', { iin })}
        >
          <Image source={require('../assets/profileicon.png')} style={styles.profileIicon} />
          <CustomText style={styles.profileBtnText}>Профиль</CustomText>
        </TouchableOpacity>
      </View>

      <CustomText style={styles.title}>Вызов врача на дом</CustomText>

      <TextInput
        style={styles.input}
        placeholder="ИИН"
        value={iin}
        editable={false}
        selectTextOnFocus={false}
      />

      <TextInput
        style={styles.input}
        placeholder="ФИО"
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
        <CustomText style={styles.buttonText}>Вызвать врача</CustomText>
      </TouchableOpacity>

      <View style={styles.NextButtonContainer}>
        <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('PriemScreen', { iin })}>
          <CustomText style={styles.NextButtonText}>📅 Записаться на приём</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('AnaliseResultScreen', { iin })}>
          <CustomText style={styles.NextButtonText}>📋 Результаты анализов</CustomText>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CallDoctor;
