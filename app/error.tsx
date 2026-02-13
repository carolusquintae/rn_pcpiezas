import { View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Divider, Text } from 'react-native-paper'

export default function error() {

  const {mensaje, descripcion} = useLocalSearchParams<{mensaje: string, descripcion: string}>()

  return (
    <View className='gap-3'>
      <Text variant='titleLarge'>Se ha producido un error</Text>
      <Text variant='bodyLarge'>{mensaje}</Text>
      {
        descripcion !== "" && (
          <View className='gap-3'>
            <Divider />
            <Text variant='titleLarge'>Detalle</Text>
            <Text variant='bodyLarge'>{descripcion}</Text>
          </View>
        )
      }
    </View>
  )
}