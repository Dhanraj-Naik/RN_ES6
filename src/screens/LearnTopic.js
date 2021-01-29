import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Button } from 'react-native';
import { topics } from '../utils/Topics';

const TAG = 'LearnTopic.js';
export default class LearnTopic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: topics,
        };
    }

    componentDidMount() {
        // console.log(TAG, 'state', this.state.list);
    }

    navigateTo = ({ id, name, screenName }) => {
        console.log(TAG, 'navigateTo: ', screenName);
        const { navigation, route } = this.props;
        navigation.navigate(screenName);
    }

    render() {
        // console.log(TAG, this.props);
        // const { navigation, route } = this.props;
        return (
            <View style={styles.containerStyle}>
                <ScrollView>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <Button
                                    key={index}
                                    title={item.name}
                                    onPress={() => this.navigateTo(item)}
                                />);
                        })
                    }

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 20,
    },
});
