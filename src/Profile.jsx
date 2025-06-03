import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomText from './CustomText';
import styles from './Profile.styles';

const ProfileScreen = ({ navigation, route }) => {
  const { iin } = route.params || {};

  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.png')} style={styles.profileImage} />
      <CustomText style={styles.title}>Профиль</CustomText>

      <CustomText style={styles.label}>ИИН:</CustomText>
      <TextInput
        style={styles.input}
        placeholder='ИИН'
        value={iin}
        editable={false}
        selectTextOnFocus={false}
      />
      <CustomText style={styles.label}>ФИО:</CustomText>
      <TextInput
        style={styles.input}
        placeholder="ФИО"
        editable={false}
        selectTextOnFocus={false}
      />

      <CustomText style={styles.label}>Телефон:</CustomText>
      <TextInput
        style={styles.input}
        placeholder="Телефон"
        editable={false}
        selectTextOnFocus={false}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PriemScreen', { iin })}
      >
        <CustomText style={styles.buttonText}>📅 Записаться на приём</CustomText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CallDoctorScreen', { iin })}
      >
        <CustomText style={styles.buttonText}>🏠 Вызвать врача</CustomText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AnaliseResultScreen', { iin })}
      >
        <CustomText style={styles.buttonText}>📋 Результаты анализов</CustomText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <CustomText style={styles.buttonText}>🔙 Выйти</CustomText>
      </TouchableOpacity>
    </View>
  );
};
export default ProfileScreen;