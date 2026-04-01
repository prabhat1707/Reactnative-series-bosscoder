
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function BlueScreen() {

  const navigater = useNavigation()
  return (
    <View style={styles.container}>
      <Button
        title="open ui demo"
        onPress={() => {
            navigater.navigate('Demo',{name:'hello'})
        }}
      />

      <View style = {{marginTop:20}}>
         <Button
        title="open redux demo"
        onPress={() => {
            navigater.navigate('Home')
        }}
      />
      
      </View>

      <View style = {{marginTop:20}}>
        <Button
        title="open api demo"
        onPress={() => {
            navigater.navigate('ApiDemo')
        }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"blue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: 'black',
    margin: 30,
  },
});
