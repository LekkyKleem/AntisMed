import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './ModalWindow.styles';

const ModalWindow = ({ visible, onClose, onLogin, iin, setIin }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none"
      hardwareAccelerated={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <Animatable.View
            animation="slideInDown"
            duration={1000}
            style={styles.modalContainer}
          >
            <Text style={styles.title}>Вход по ИИН</Text>
            <TextInput
              style={styles.input}
              placeholder="Введите ИИН"
              keyboardType="numeric"
              maxLength={12}
              value={iin}
              onChangeText={setIin}
            />
            <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
              <Text style={styles.loginText}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Отмена</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalWindow;
