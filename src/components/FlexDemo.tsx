import { StatusBar } from 'expo-status-bar';
import {  StyleSheet,ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function FlexDemo() {
  return (
    <View style={styles.container}>
         <View style={styles.row}>
        <View style={[styles.box, { flex: 1, backgroundColor: '#e91e63' }]}>
          <Text style={styles.boxText}>flex:1</Text>
        </View>
        <View style={[styles.box, { flex: 1, backgroundColor: '#9c27b0' }]}>
          <Text style={styles.boxText}>flex:1</Text>
        </View>
        <View style={[styles.box, { flex:1, backgroundColor: '#3f51b5' }]}>
          <Text style={styles.boxText}>flex:1</Text>
        </View>
         <View style={[styles.box, { flex:1, backgroundColor: '#3f51b5' }]}>
          <Text style={styles.boxText}>flex:1</Text>
        </View>
         <View style={[styles.box, { flex:1, backgroundColor: '#3f51b5' }]}>
          <Text style={styles.boxText}>flex:1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    flexDirection: 'column',
    alignItems:'center'
  },
  row: {
    flexDirection: 'row',
    height: 60,
    gap: 4,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
