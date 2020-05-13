import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    height: 100px;
    margin-bottom: 20px;
`;

export const TabItem = styled.View`
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #FFF
`;

const styles = StyleSheet.create({
    tabsContainer: {
        paddingLeft: 10,
        paddingRight: 20
    }
});

export default styles;
