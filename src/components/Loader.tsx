import { StatusBar } from 'expo-status-bar';
import {  StyleSheet,ActivityIndicator,Alert,TouchableOpacity, ScrollView, Text, View, Image, Button,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function LoaderDemo() {
  return (
    <View style={styles.container}>
     <ActivityIndicator />

      <ActivityIndicator size="large" color="#6200ee" />

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
