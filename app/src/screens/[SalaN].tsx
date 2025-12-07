import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Sala = () => {
   const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default Sala

const styles = StyleSheet.create({})