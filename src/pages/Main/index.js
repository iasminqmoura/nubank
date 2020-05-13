import React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Description, Annotation, Title } from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

export default function Main() {
    return (
        <Container>
            <Header />
            <Content>
                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666" />
                        <Icon name="visibility-off" size={28} color="#666" />
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponível</Title>
                        <Description>R$ 0,00</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>Você transferiu R$ 35,00 para Leonardo</Annotation>
                    </CardFooter>
                </Card>
            </Content>
            <Tabs />
        </Container>
    );
}