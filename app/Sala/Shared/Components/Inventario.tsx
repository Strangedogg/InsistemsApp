import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router"


// can get here from: novo inventário, gerenciar inventários
// must go back only to: gerenciar inventários ###STILL NEEDS FIX###
// goes to: Salas, Itens verificados, Itens não verificados, Itens indefinidos, Finalizar

const Inventario = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Inventario</Text>
      <Link className="text-4xl text-primary font-bold" href="/Salas">Salas</Link>
    </View>
  )
}

export default Inventario

const styles = StyleSheet.create({})