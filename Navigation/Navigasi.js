import { createAppContainer } from 'react-navigation'
import {
    createStackNavigator
} from 'react-navigation-stack'
import Login from '../FromLogin/Login'
import Home from '../Home/Home'
import Berita from '../Home/Berita'

var Data = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Berita Terkini'
        }
    },
    Berita: {
        screen: Berita,
        navigationOptions: {
            title: 'Berita Terkini'
        }
    }
})

export default createAppContainer(Data)