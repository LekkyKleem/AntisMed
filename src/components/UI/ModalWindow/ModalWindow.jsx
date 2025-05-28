import React from 'react';
import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './ModalWindow.styles';
import CustomText from '../../../CustomText'

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
            <CustomText style={styles.title}>Вход по ИИН</CustomText>

            <TextInput
              style={styles.input}
              placeholder="Введите ИИН"
              keyboardType="numeric"
              maxLength={12}
              value={iin}
              onChangeText={setIin}
            />

            <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
              <CustomText style={styles.loginText}>Войти</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose}>
              <CustomText style={styles.cancelText}>Отмена</CustomText>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalWindow;
