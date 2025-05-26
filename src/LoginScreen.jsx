import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './Login';
import ModalWindow from './components/UI/ModalWindow/ModalWindow';

const LoginScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [iin, setIin] = useState('');

  const handleLogin = () => {
    if (iin.length === 12) {
      setModalVisible(false);
      navigation.navigate('PriemScreen', { iin });
    } else {
      alert('ИИН должен содержать 12 цифр');
    }
  };

  return (
    <View style={styles.container}>
      <Login onPress={() => setModalVisible(true)} />
      <ModalWindow
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onLogin={handleLogin}
        iin={iin}
        setIin={setIin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
