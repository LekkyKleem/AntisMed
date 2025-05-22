import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafe',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  calendar: {
    marginBottom: 60,
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#dfe6ef',
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  freeContainerScroll: {
    marginTop: 15,
    maxHeight: 250,
  },
  freeDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  freeDateText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  returnButton: {
    marginTop: 25,
    alignItems: 'center',
  },
  returnButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: '600',
  },
});
