import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafe',
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  scroll: {
    marginBottom: 20,
  },

  analysisItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  analysisName: {
    fontSize: 18,
    fontWeight: '600',
  },

  analysisDate: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },

  analysisResult: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },

  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 40,
    alignSelf: 'center',
    width: '80%',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  
  resultButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  resultButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
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

});
