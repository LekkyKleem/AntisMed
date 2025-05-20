import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Login = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button title="Войти" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // центрирует кнопку по вертикали
    alignItems: 'center',     // центрирует кнопку по горизонтали
  },
});

export default Login;
