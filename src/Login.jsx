import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import styles from './Login.styles';

const Login = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
