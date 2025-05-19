import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Login.styles';

const Login = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Войти по ИИН</Text>
    </TouchableOpacity>
  );
};

export default Login;
