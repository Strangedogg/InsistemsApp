import { Link } from "expo-router";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//goes to: inventários
const NovoInventario = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>NovoInventario</Text>
      <Link className="text-4xl text-primary font-bold" href="./Shared/Components/Inventario">Prosseguir</Link>
    </View>
  )
}

export default NovoInventario

const styles = StyleSheet.create({})