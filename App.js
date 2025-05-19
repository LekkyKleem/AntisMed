import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/Login';
import ModalWindow from './src/components/UI/ModalWindow/ModalWindow';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [iin, setIin] = useState('');

  const handleLogin = () => {
    if (iin.length === 12) {
      setModalVisible(false);
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
});
