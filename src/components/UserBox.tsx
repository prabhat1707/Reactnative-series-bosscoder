
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const UserBox = ({ userName, age, url,id,onDelete }) => {

    return (
        <View style={styles.userBox}>

            {/* user image */}
            <Image
                source={{ uri: url }}
                style={{ width: "25%", height: 120, borderRadius: 8, resizeMode: 'stretch' }}
            />
            {/* user data */}
            <View style={styles.userData}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{userName}</Text>
                <Text style={{ fontSize: 12, marginTop: 5 }}>{age}</Text>
            </View>

            <TouchableOpacity 
            style={styles.circleButton}
            onPress={ () =>
                 onDelete(
                    id
                )
            }
            >
                <Image 
                style = {{width:20,height:20}}
                source={require('../../assets/delete.png')} />
            </TouchableOpacity>

        </View>
    );
}

export default UserBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleButton:{
        height:35,
        width:35,
        borderRadius: 20,
        backgroundColor: "#eee",
        justifyContent:"center",
        alignItems:"center",
        marginStart: 10
    },
    userBox: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        elevation: 3,
        alignItems:'center',
        marginTop: 8
    },
    userData: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10

    }
});
