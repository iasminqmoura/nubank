import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import styles from './styles';
import logo from '../../../assets/Nubank_Logo.png';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.title}>Iasmin</Text>
            </View>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </View>
    );
}