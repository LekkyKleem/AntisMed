import React, { useState } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './Login';
import ModalWindow from './components/UI/ModalWindow/ModalWindow';

// Импортируем функции из API (должны быть реализованы отдельно)
import {
  startAuthorization,  // Запускает процесс — отправляет ИИН и телефон
  completeAuthorization, // Завершает — проверяет код из SMS и возвращает токен
  refreshToken,  // Обновляет токен, если старый просрочен
  getPersonInfo,  // Получает данные пользователя по токену
  checkTokenErrors // Проверяет ошибки токена (код ошибки → сообщение)
} from './API';

const LoginScreen = ({ navigation }) => {
  // Состояния для управления формой и авторизацией
  const [modalVisible, setModalVisible] = useState(false);

  const [iin, setIin] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState(1);  // 1 — ввод ИИН и телефона, 2 — ввод кода

  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  // Сохраняем токен в локальное хранилище
  const saveToken = async (tokenValue) => {
    try {
      await AsyncStorage.setItem('userToken', tokenValue);
    } catch (e) {
      console.error('Ошибка сохранения токена:', e);
    }
  };

  // Первый шаг: отправляем ИИН и телефон, чтобы начать авторизацию
  const handleStartAuth = async () => {
    // Проверяем базовый формат данных
    if (iin.length !== 12 || phoneNumber.length !== 11) {
      Alert.alert('Ошибка', 'Проверьте ИИН (12 цифр) и номер телефона (11 цифр).');
      return;
    }
    setLoading(true);
    try {
      // Вызываем функцию API — отправляем данные
      const result = await startAuthorization(iin, phoneNumber);
      
      // Если сервер ответил успехом — переходим к следующему шагу
      if (result && !result.error) {
        setStep(2);
      } else {
        Alert.alert('Ошибка', result.message || result.error || 'Не удалось начать авторизацию.');
      }      
    } catch (error) {
      Alert.alert('Ошибка', 'Сервер недоступен или неверный ответ.');
      console.error('handleStartAuth error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Второй шаг: вводим код подтверждения и завершаем авторизацию
  const handleCompleteAuth = async () => {
    if (!verificationCode) {
      Alert.alert('Ошибка', 'Введите код подтверждения.');
      return;
    }
    setLoading(true);
    try {
      // Завершаем авторизацию — получаем токен
      const receivedToken = await completeAuthorization(phoneNumber, verificationCode);
      setToken(receivedToken);
      await saveToken(receivedToken);

      // Получаем данные пользователя с этим токеном
      let personData = await getPersonInfo(iin, phoneNumber, receivedToken);

      // Проверяем, есть ли ошибка токена (например, просрочен)
      if (personData?.code) {
        const errorMessage = checkTokenErrors(personData.code);

        if (personData.code === 2110) { // если токен просрочен, пробуем обновить
          const newToken = await refreshToken(iin, phoneNumber);
          if (newToken) {
            await saveToken(newToken);
            personData = await getPersonInfo(iin, phoneNumber, newToken);
            if (personData) {
              setLoading(false);
              setModalVisible(false);
              // Переходим к экрану с данными пациента
              navigation.navigate('PriemScreen', { iin, personData });
            }            
          }
        }

        // Если ошибка не исправилась — показываем сообщение
        Alert.alert('Ошибка', errorMessage || 'Ошибка авторизации.');
        return;
      }

      // Если данные пользователя успешно получены — закрываем модалку и идём дальше
      if (personData) {
        setModalVisible(false);
        navigation.navigate('PriemScreen', { iin, personData });
      } else {
        Alert.alert('Ошибка', 'Не удалось получить данные пациента.');
      }
    } catch (error) {
      Alert.alert('Ошибка', 'Неверный код или проблемы с авторизацией.');
      console.error('handleCompleteAuth error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Кнопка открытия модального окна */}
      <Login onPress={() => setModalVisible(true)} />
  
      {/* Модальное окно с формами */}
      <ModalWindow
        visible={modalVisible}
        onClose={() => {
          // Очистка формы при закрытии
          setModalVisible(false);
          setStep(1);
          setIin('');
          setPhoneNumber('');
          setVerificationCode('');
        }}
        iin={iin}
        setIin={setIin}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        verificationCode={verificationCode}
        setVerificationCode={setVerificationCode}
        step={step}
        onStartAuth={handleStartAuth}
        onCompleteAuth={handleCompleteAuth}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
  },
});

export default LoginScreen;
