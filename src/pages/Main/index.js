import React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import styles from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

export default function Main() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Icon name="attach-money" size={28} color="#666" />
                        <Icon name="visibility-off" size={28} color="#666" />
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>Saldo disponível</Text>
                        <Text style={styles.description}>R$ 0,00</Text>
                    </View>
                    <View style={styles.cardFooter}>
                        <Text style={styles.annotation}>Você transferiu R$ 35,00 para Leonardo</Text>
                    </View>
                </View>
            </View>
            <Tabs />
        </View>
    );
}