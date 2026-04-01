import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseLikes } from '../store/reducers/uiDataReducer';

export default function HomeScreen() {

  const navigater = useNavigation()

  const like = useSelector(state => state.uiDataReducer.likeCount)

  const dispacher = useDispatch()

  const [count,setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style = {{fontSize:20}}>
        {`Number of liks count ${like}`}
      </Text>

      <View style = {{marginTop:20}}>
        <Button
        title="decrease likes"
        onPress={() => {
            dispacher(decreaseLikes())
        }}
      />
      </View>

      <View style = {{marginTop:20}}>
        <Button
        title="open Data Screen"
        onPress={() => {
            navigater.navigate('Data')
        }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
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
