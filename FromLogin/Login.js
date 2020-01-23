import React from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/Entypo'

import styles from './style'
import logo from '../image/logo.png'
import image from '../image/logo.png'

console.disableYellowBox = (true)

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false,
            role: true
        }
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }
    render() {
        setTimeout(() => {
            this.setState({ role: false })
        }, 3000);

        if (this.state.role === true) {
            return (
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                    <Text style={styles.logoText}> REACT NATIVE </Text>
                </View>
            )
        }
        return (
            <ScrollView>
                <View style={styles.backgroundContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.logoText}> REACT NATIVE </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon name='account' size={28} color={'gray'}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputUser}
                            placeholder={'Username'}
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'

                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icons name='lock'
                            size={28} color={'gray'}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.inputPass}
                            placeholder={'Password'}
                            secureTextEntry={this.state.showPass}
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'

                        />
                        <TouchableOpacity style={styles.btnEsy}
                            onPress={this.showPass}>
                            <Icons name={this.state.press == false ? 'eye' : 'eye-with-line'}
                                size={26} color={'gray'}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btnLogin}
                            onPress={() => this.props.navigation.navigate("Home")}>
                            <Text style={styles.text}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        )
    }
}

