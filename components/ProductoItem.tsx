import { View } from 'react-native'
import React from 'react'
import { Producto } from '@/model/Types'
import { Button, Card, Icon, Text, useTheme } from 'react-native-paper'
import { Image } from 'expo-image'

type ProductoItemProps = {
  producto: Producto,
  accionRetirarProducto: (producto: Producto) => void
}

export default function ProductoItem({producto, accionRetirarProducto}: ProductoItemProps) {
  
  const theme = useTheme()

  return (
    <Card>
      <Card.Content className='flex-row' style={{ backgroundColor: theme.colors.surface }}>
        <Image 
          source={{ uri: producto.imagen }}
          style={{ width: 80, height: 80, borderRadius: 8 }}
        />

        <View className='flex-col'>
          <Text variant='titleMedium' style={{ color: theme.colors.onSurface }}>
            {producto.nombre}
          </Text>
          <Text variant='titleMedium'>{producto.precio}</Text>
        </View>
      </Card.Content>

      <Card.Actions>
        <Button onPress={() => {}} textColor={theme.colors.primary} icon={"eye"}>
          Detalle
        </Button>

        <Button 
          onPress={() => accionRetirarProducto(producto)} 
          buttonColor={theme.colors.tertiaryContainer} 
          textColor={theme.colors.tertiary}icon={"delete"}
        >Quitar</Button>
      </Card.Actions>
    </Card>
  )
}