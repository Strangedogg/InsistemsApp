import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router";

//goes to: inventário, baixar relatórios anteriores
const GerenciarInventarios = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>NovoInventario</Text>
      <Link className="text-4xl text-primary font-bold" href="./GerenciarInventarios/BaixarRelatoriosAnteriores">Baixar Relatórios Anteriores</Link>
      <Link className="text-4xl text-primary font-bold" href="./GerenciarInventarios/Inventario">Inventário</Link>
    </View>
  )
}

export default GerenciarInventarios

const styles = StyleSheet.create({})