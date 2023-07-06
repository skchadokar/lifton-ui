import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { logout } from '../../feature/authSlice';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function Users() {
    const { userData } = useSelector((state: RootState) => state.auth);

    const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

    return (
        <View style={styles.height}>
            <Text variant="headlineSmall">Welcome {userData.userName}</Text>

            <Card style={styles.cardHeight}>
                <Card.Title title="Lifton" subtitle="Welcome to Lifton" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">{userData.userName}</Text>
                    <Text variant="bodyMedium">Engineer</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    height: {
        marginTop: Platform.OS === 'ios' ? 70 : 20,
        padding: 10
    },
    cardHeight: {
        marginTop: 20
    }
});
