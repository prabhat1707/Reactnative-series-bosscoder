import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DemoScreen from './src/screens/DemoScreen'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/stacks/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}

