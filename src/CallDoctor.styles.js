import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafe',
    },

    button: {
        backgroundColor: '#4a90e2',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        paddingBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
      },
      
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      
      input: {
        width: '80%',
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
      },
      
      NextButtonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 4,
      },
      
      NextButton: {
        alignSelf: 'center',
        backgroundColor: '#4a90e2',
        width: '45%',
        height: '75',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { height: 2 },
        shadowRadius: 3,
        elevation: 3,
      },
    
      NextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      },

      profileContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 10,
      },
      profileIicon: {
        width: 50,
        height: 50,
      },
    
      profileBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
        borderWidth: 3,
        borderColor: '#4a90e2',
        gap: 10,
      },
    
      profileBtnText: {
        fontSize: 20,
        color: '#4a90e2',
        fontWeight: '600',
      },
  });