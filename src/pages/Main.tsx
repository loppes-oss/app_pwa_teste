import React from 'react';
import { View,Text,StyleSheet } from 'react-native';



export function Main() {
  return (
    <View >
        <Text>estou funcionando</Text>
        <Text>estou fazendo um teste de publicação para produção</Text>
        <Text style={styles.texto}>ahh!! e aproveitando feliz Natal!!..kkk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    texto: {
        backgroundColor:'red',
        color: '#fff'
    }
})