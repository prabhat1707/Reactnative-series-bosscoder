import { StatusBar } from 'expo-status-bar';
import {  StyleSheet,Alert,TouchableOpacity, ScrollView, Text, View, Image, Button,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ButtonDemo() {
  return (
    <View style={styles.container}>
      <Button title="Click Me" onPress={() => alert('Button Clicked!')}/>
    <Pressable
          style={({ pressed }) => [
            styles.pressable,
            pressed && styles.pressablePressed,
          ]}
          onPress={() => Alert.alert('Pressable pressed!')}
        >
          <Text style = {{color:'white',fontSize:20}}>Press Me</Text>
        </Pressable>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => Alert.alert('TouchableOpacity pressed!')}
      >
        <Text style={styles.btnText}>Touch Me</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems:'center'
  },
   touchable: {
    backgroundColor: '#03dac6',
    paddingHorizontal: 24,
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
   pressable: {
    backgroundColor: 'blue',
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 12,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  pressablePressed: {
    backgroundColor: 'white',
  },
});
