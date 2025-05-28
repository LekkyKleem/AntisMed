import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

export default CustomText;
