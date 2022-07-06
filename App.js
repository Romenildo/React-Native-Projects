
import { StyleSheet, Text, View } from 'react-native';
import Main from './Components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:25,
    backgroundColor: "#efefef"

  },
});
