import React from 'react'
import { Card, Text, useTheme } from 'react-native-paper'

type CategoriaCardProps = {
  nombre: string,
  imagen: string
}

export default function CategoriaCard({nombre, imagen}: CategoriaCardProps) {
  
  const theme = useTheme()

  return (
    <Card mode='elevated' className='w-[40%]' style={{ backgroundColor: theme.colors.surface }}>
      <Card.Cover source={{uri: imagen}} />
      <Card.Content>
        <Text variant='titleMedium' style={{ color: theme.colors.onSurface }}>{nombre}</Text>
      </Card.Content>
    </Card>
  )
}