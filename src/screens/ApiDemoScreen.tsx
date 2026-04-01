
import { View, FlatList, StyleSheet, Text, Image, Alert } from 'react-native';
import axios from 'axios';
import { deleteUser, getUserData } from '../service/http';
import { useEffect, useState } from 'react';
import UserBox from '../components/UserBox';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ApiDemoScreen() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        getUserData(
            {
                onSuccess: (data) => {
                    setUserData(data)
                },
                onError: (error) => {
                    console.log(error)
                }
            }
        )
    })

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={userData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <UserBox
                        userName={item.name}
                        age={item.age}
                        url={item.avatar}
                        id={item.id}
                        onDelete = {(id) => {
                            deleteUser(
                                id,
                                {
                                    onSuccess: () => {
                                       Alert.alert('User Deleted!')
                                    },
                                    onError: (error) => {
                                        console.log(error)
                                    }
                                }

                            )
                        }}
                    />
                )
                }

            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:8,
        backgroundColor: "white"
    },
});
