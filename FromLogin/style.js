import {
    StyleSheet,
    Dimensions
} from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    },
    image: {
        height: 150,
        width: 150,
    },
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    logo: {
        height: 120,
        width: 120
    },
    logoText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        margin: 10,
        opacity: 0.5,
        marginBottom: 20
    },
    inputContainer: {
        marginTop: 10
    },
    inputUser: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        paddingRight: 20,
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 25,
        marginVertical: 5
    },
    inputPass: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        paddingRight: 45,
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 25,
        marginVertical: 5
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },
    btnEsy: {
        position: 'absolute',
        top: 15,
        right: 40
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'gray',
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 16,
        top: 12,
        textAlign: 'center'
    }
})

export default styles

