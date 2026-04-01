import { createStackNavigator } from '@react-navigation/stack';
import BlueScreen from '../screens/BlueScreen';
import Demo from '../screens/DemoScreen';
import ApiDemoScreen from '../screens/ApiDemoScreen';
import HomeScreen from '../screens/HomeScreen';
import DataScreen from '../screens/DataScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator>
                <Stack.Screen name="Blue" component={BlueScreen} />
                <Stack.Screen name="ApiDemo" component={ApiDemoScreen} />
                <Stack.Screen name="Demo" component={Demo} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Data" component={DataScreen} />
            </Stack.Navigator>
    );
}