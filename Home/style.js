import {
    StyleSheet,
    Dimensions
} from 'react-native'
import { color } from 'react-native-reanimated'

export const styles = StyleSheet.create({
    Component: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 5
    },
    Data: {
        height: 100,
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center'
    },
    image: {
        height: 98,
        width: 100,
        borderRadius: 10
    },
    Text: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        marginTop: -10,
    },

    // Image Berita
    Container: {
        paddingHorizontal: 3
    },
    Image: {
        width: '100%',
        height: 300,
        marginTop: 8,
        borderRadius: 10
    },
    Judul: {
        fontSize: 30,
        textAlign: 'center',
        color: 'blue'
    },
    Description: {
        fontSize: 20,
        marginTop: 10
    }
})