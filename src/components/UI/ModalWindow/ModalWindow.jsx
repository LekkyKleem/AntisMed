import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './ModalWindow.styles';

const ModalWindow = ({
  visible,
  onClose,
  iin,
  setIin,
  phoneNumber,
  setPhoneNumber,
  verificationCode,
  setVerificationCode,
  step,
  onStartAuth,
  onCompleteAuth,
  loading,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {step === 1 && (
            <>
              <Text style={styles.title}>Введите ИИН</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={12}
                value={iin}
                onChangeText={setIin}
                editable={!loading}
              />
              <Text style={styles.label}>Введите номер телефона</Text>
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
                maxLength={11}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                editable={!loading}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={onStartAuth}
                disabled={loading}
              >
                <Text style={styles.buttonText}>Начать авторизацию</Text>
              </TouchableOpacity>
            </>
          )}

          {step === 2 && (
            <>
              <Text style={styles.title}>Введите код подтверждения</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={verificationCode}
                onChangeText={setVerificationCode}
                editable={!loading}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={onCompleteAuth}
                disabled={loading}
              >
                <Text style={styles.buttonText}>Подтвердить</Text>
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            disabled={loading}
          >
            <Text style={styles.closeButtonText}>Закрыть</Text>
          </TouchableOpacity>

          {loading && (
            <View style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(255,255,255,0.7)',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
              <ActivityIndicator size="large" color="#3A7AFE" />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalWindow;
