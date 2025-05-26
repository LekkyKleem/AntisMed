import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './Login.styles';

const AnimatableTouchable = Animatable.createAnimatableComponent(TouchableOpacity);

const Login = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn" duration={1500}>
        <AnimatableTouchable
          onPress={onPress}
          style={styles.button}
          animation="pulse"
          duration={2000}
          iterationCount="infinite"
          iterationDelay={300}
        >
          <Text style={styles.buttonText}>Войти по ИИН</Text>
        </AnimatableTouchable>
      </Animatable.View>
    </View>
  );
};

export default Login;
