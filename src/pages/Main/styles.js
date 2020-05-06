import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8B10AE',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        maxHeight: 400,
        justifyContent: 'center'
    },
    card: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 4,
        marginHorizontal: 20,
        marginVertical: 0
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30
    },
    cardContent: {
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 30,
        justifyContent: 'center',
        marginBottom: 30
    },
    cardFooter: {
        padding: 30,
        backgroundColor: '#EEE',
        borderRadius: 4
    },
    title: {
        fontSize: 13,
        color: '#999'
    },
    description: {
        fontSize: 32,
        marginTop: 3,
        color: '#333'
    },
    annotation: {
        fontSize: 13,
        color: '#333'
    }
});

export default styles;