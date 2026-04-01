import { StatusBar } from 'expo-status-bar';
import {  StyleSheet,ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageDemo from '../components/ImageDemo';
import ButtonDemo from '../components/ButtonDemo';
import LoaderDemo from '../components/Loader';
import FlexDemo from '../components/FlexDemo';
import UseStateDemo from '../components/useStateDemo';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DemoScreen() {
      const {params} = useRoute()
    console.log(params)
    
  return (
    <SafeAreaView style={styles.root}>

        <ScrollView>

      <Text style = {styles.pageTitle}>
        📚 All Topics
        </Text>

        <View style = {styles.section}>
           <View style = {styles.sectionHeader}>
             <View>
               <Text style = {styles.badgeText}> 01 </Text> 
            </View>
            <Text style = {styles.badgeText}> Image </Text> 
           </View>

           <View style = {styles.sectionBody}>
            <ImageDemo/>
           </View>

        </View>

         <View style = {styles.section}>
           <View style = {styles.sectionHeader}>
             <View>
               <Text style = {styles.badgeText}> 02 </Text> 
            </View>
            <Text style = {styles.badgeText}> Button </Text> 
           </View>

           <View style = {styles.sectionBody}>
            <ButtonDemo/>
           </View>

        </View>
        
        <View style = {styles.section}>
           <View style = {styles.sectionHeader}>
             <View>
               <Text style = {styles.badgeText}> 03 </Text> 
            </View>
            <Text style = {styles.badgeText}> Loader </Text> 
           </View>

           <View style = {styles.sectionBody}>
            <LoaderDemo/>
           </View>

        </View>

        <View style = {styles.section}>
           <View style = {styles.sectionHeader}>
             <View>
               <Text style = {styles.badgeText}> 04 </Text> 
            </View>
            <Text style = {styles.badgeText}> Flex Demo </Text> 
           </View>

           <View style = {styles.sectionBody}>
            <FlexDemo/>
           </View>

        </View>

        <View style = {styles.section}>
           <View style = {styles.sectionHeader}>
             <View>
               <Text style = {styles.badgeText}> 05 </Text> 
            </View>
            <Text style = {styles.badgeText}> Use State Demo </Text> 
           </View>

           <View style = {styles.sectionBody}>
            <UseStateDemo/>
           </View>

        </View>

        </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  content: {
    paddingBottom: 40,
  },
  pageTitle: {
    padding:8,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor:'white',
        textAlign:'center'
      },

      section:{
        marginTop: 16,
        marginHorizontal: 12,
        borderRadius: 12,
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 2,
      },

      sectionHeader:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#6200ee',
        paddingHorizontal:10,
        paddingVertical:10
      },
      badgeText:{
        color:'white',
        fontWeight:'700',
        fontSize:13
      },
      sectionBody:{
        padding:8
      }
});
