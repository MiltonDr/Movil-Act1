import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerA}></View>
      <View style={styles.containerB}></View>
      <View style={styles.containerC}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerA: {
    height: '19%',
    width: '100%',
    backgroundColor: 'lightgreen',
    marginBottom: '1%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  containerB: {
    height: '60%',
    width: '100%',
    backgroundColor: 'lightblue',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  containerC: {
    height: '19%',
    width: '100%',
    backgroundColor: 'lightgreen',
    marginTop: '1%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
});
