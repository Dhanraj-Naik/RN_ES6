import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const es5multiline = "This is" +
"a cat";

const multiLineString =  `This is a
multiline string`;

const TemplateLiterals = () => {

    return (
        <View style={styles.container}>
             <Text>{es5multiline}</Text>
            <Text>{multiLineString}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default TemplateLiterals;
