import React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import styles, { Container, TabItem, TabText } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Main() {
    return (
        <Container>
            <ScrollView horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.tabsContainer}>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#FFF" />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#FFF" />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </ScrollView>
        </Container>
    );
}
