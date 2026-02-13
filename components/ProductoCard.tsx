import { Pressable, View } from 'react-native'
import React from 'react'
import { CATEGORIAS, Producto } from '@/model/Types'
import { Badge, Card, Icon, Text, useTheme } from 'react-native-paper'
import { Image } from 'expo-image'

type ProductoCardProps = {
  producto: Producto,
  onPress: (producto: Producto) => void
}

export default function ProductoCard({producto, onPress}: ProductoCardProps) {
  
  const theme = useTheme()
  
  return (
    <Pressable onPress={() => onPress(producto)}>
      <Card style={{ marginHorizontal: 12, marginVertical: 8, borderRadius: 12 }}>
        <View style={{ height: 180, backgroundColor: '#ffffff',justifyContent: 'center',alignItems: 'center' }}>
          <Image
            source={{ uri: producto.imagen }} 
            style={{ width: '100%', height: '100%'}} 
            contentFit='contain' 
          />
        </View>

        <Card.Content>
          <View className='flex-row justify-between'>
            <Text variant='titleMedium' style={{ fontWeight: "bold" }}>
              {producto.nombre}
            </Text>
            <Badge className={"px-8"}>{CATEGORIAS[0].nombre}</Badge>
          </View>

          <Text variant='titleMedium' style={{ color: theme.colors.onSurfaceVariant }}>
            {producto.marca}
          </Text>

          <View className='flex-row justify-between'>
            <Text variant='titleMedium' style={{ fontWeight: "bold", color: theme.colors.tertiary }}>
              {producto.precio} €
            </Text>

            <View className='flex-row gap-2'><Icon source={"star"} size={16} color='#ffd700' />
            <Text>{producto.estrellas.toFixed(1)} ({producto.valoraciones})</Text></View>
          </View>
        </Card.Content>
      </Card>
    </Pressable>
  )
}