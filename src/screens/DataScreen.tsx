
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { increaseLikes } from '../store/actions/dataActions';
import { increaseLikesByValue } from '../store/reducers/uiDataReducer';

export default function DataScreen() {

  const navigater = useNavigation()

  const like = useSelector(state => state.uiDataReducer.likeCount)

  const dispacher = useDispatch()

  return (
    <View style={styles.container}>
      <Text style = {{fontSize:20}}>
        {`Number of liks count ${like}`}
      </Text>

      <View style = {{marginTop:20}}>
        <Button
        title="increase likes"
        onPress={() => {
            dispacher(increaseLikesByValue(10))
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
