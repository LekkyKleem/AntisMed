import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
      backgroundColor: '#f9fafe',
      alignItems: 'center',
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 20,
      marginBottom: 30,
      borderWidth: 4,
      borderColor: '#4a90e2',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      alignSelf: 'flex-start',
      marginTop: 10,
    },
    value: {
      fontSize: 16,
      marginBottom: 10,
      alignSelf: 'flex-start',
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      backgroundColor: '#fff',
      fontFamily: 'AvenirNext-Regular',
    },
    button: {
      backgroundColor: '#4a90e2',
      padding: 12,
      borderRadius: 6,
      marginVertical: 10,
      width: '100%',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 16,
      fontFamily: 'AvenirNext-Regular',
    },
  });
  