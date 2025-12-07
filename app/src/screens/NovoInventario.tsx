import { Link } from "expo-router";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//goes to: inventários
const NovoInventario = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>NovoInventario</Text>
      <Link href="./Inventario"asChild>
      <TouchableOpacity className="p-5 bg-blue-500 rounded-lg m-2">
        <Text className="text-4xl text-white font-bold">Prosseguir</Text>
      </TouchableOpacity>
      </Link>
    </View>
  )
}

export default NovoInventario

const styles = StyleSheet.create({})