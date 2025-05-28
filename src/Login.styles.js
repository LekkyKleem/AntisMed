import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white', 
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: '#4a90e2', 
    paddingVertical: 15,
    borderRadius: 10,
    width: '150',               
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',          
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'AvenirNext-Regular',
  },
});

export default styles;
