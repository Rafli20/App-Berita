import React from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'
import { styles } from './style'
import Data from '../DataJson/Data.json'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = { Data: Data }
    }
    App = (Detail) => {
        this.props.navigation.navigate('Berita', { Data: Detail })
    }
    render() {
        return (
            <View style={styles.Component}>
                <FlatList
                    data={this.state.Data}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.Data}
                                onPress={() => this.App([`${item.image}`, `${item.description}`, `${item.judul}`])}>
                                <View>
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                </View>

                                <View style={styles.Text}>
                                    <Text style={{ fontSize: 20, marginLeft: 10 }}>
                                        {item.judul}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

        )
    }
}