import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {Link} from "expo-router";



const Salas = () => {
let classes = ["sala 1", "sala 2", "sala 3"];

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Salas</Text>
      <Link href="./LerObjeto" asChild>
        <TouchableOpacity className="p-5 bg-blue-500 rounded-lg m-2">
          <Text className="text-4xl text-white font-bold">
            Ler objeto
          </Text>
        </TouchableOpacity>
      </Link>
      
    </View>
  )
}

export default Salas

const styles = StyleSheet.create({})