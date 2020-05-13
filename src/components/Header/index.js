import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import styles, { Container, Top, Title } from './styles';
import logo from '../../../assets/Nubank_Logo.png';

export default function Header() {
    return (
        <Container>
            <Top>
                <Image source={logo} />
                <Title>Iasmin</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}