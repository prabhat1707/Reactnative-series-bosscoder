import { StatusBar } from 'expo-status-bar';
import {  StyleSheet,ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ImageDemo() {
  return (
    <View style={styles.container}>
        <Image 
    
        source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} 
        style={{width:100,height:100,borderRadius:8}}/>

        <Image 
        source={require('../../assets/icon.png')} 
        style={
            {
                width:100,
                height:100,
                borderRadius:8,
                marginTop:10 }
            }/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    flexDirection: 'column',
    alignItems:'center'
  },
});
