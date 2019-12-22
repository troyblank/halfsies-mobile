import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        fontFamily: 'muli'
    }
});

const RegularText = props => <Text style={styles.body}>{props.children}</Text>;

export default RegularText;