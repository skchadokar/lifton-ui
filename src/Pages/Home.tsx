import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { logout } from '../feature/authSlice';
import { BottomNavigation, Drawer } from 'react-native-paper';
import Users from './Users/Users';
import LogoutHandle from './Login/logout';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

function Home({ navigation }: any): JSX.Element {
    const dispatch = useDispatch();
    const { isLogin, userData } = useSelector((state: RootState) => state.auth);

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'user', title: 'User', focusedIcon: 'card-account-details' },
        { key: 'albums', title: 'Notification', focusedIcon: 'bell' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'logout', title: 'Logout', focusedIcon: 'logout' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        user: Users,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        logout: LogoutHandle,
    });

    return (
        // <View>
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
        // </View>
    )
}

export default Home;