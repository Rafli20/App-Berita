import React from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'

import { styles } from './style'

export default class Berita extends React.Component {
    constructor() {
        super()
        this.state = {
            image: '',
            judul: '',
            description: ''
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.Container}>
                    <Text style={styles.Judul}>
                        {this.props.navigation.state.params.Data[2]}
                    </Text>
                    <Image source={{ uri: this.props.navigation.state.params.Data[0] }} style={styles.Image} />
                    <Text style={styles.Description}>
                        {this.props.navigation.state.params.Data[1]}
                    </Text>
                </View>
            </ScrollView>

        )
    }
}