import { Link } from "expo-router"
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


// can get here from: Index
// 
// goes to: Salas, Itens verificados, Itens não verificados, Itens indefinidos, Finalizar

const Inventario = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Inventario</Text>
      <Link href="./Salas" asChild>
      <TouchableOpacity className="p-5 bg-blue-500 rounded-lg m-2">
         <Text className="text-4xl text-white font-bold">Salas</Text>
      </TouchableOpacity>
      </Link>
    </View>
  )
}

export default Inventario

const styles = StyleSheet.create({})