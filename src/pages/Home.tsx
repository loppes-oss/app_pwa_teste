import React from 'react';
import { View,Text,StyleSheet } from 'react-native';



export function Home() {
  return (
    <View >
        <Text>estou funcionando</Text>
        <Text>estou fazendo um teste de publicação para produção</Text>
        <Text style={styles.texto}>atualização de sistema</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    texto: {
        backgroundColor:'red',
        color: '#fff'
    }
})