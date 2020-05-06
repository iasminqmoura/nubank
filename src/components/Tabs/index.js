import React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Main() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.tabsContainer}>
                <View style={styles.tabItem}>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Indicar amigos</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-downward" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Depositar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-upward" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Transferir</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="lock" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Bloquear cartão</Text>
                </View>
            </ScrollView>
        </View>
    );
}
