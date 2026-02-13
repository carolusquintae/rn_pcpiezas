import { View } from 'react-native'
import React from 'react'
import { Button, Card, Icon, Text , useTheme } from 'react-native-paper'

type CabeceraCarritoProps = {
  total: number,
  accionComprar: () => void
}

export default function CabeceraCarrito({total, accionComprar}: CabeceraCarritoProps) {
  
  const theme = useTheme()

  return (
    <Card style={{ backgroundColor: theme.colors.primaryContainer }}>
      <Card.Content className='flex-row justify-between'>
        <View className='flex-col'>
          <Text 
            variant='labelMedium' 
            style={{ color: theme.colors.onPrimaryContainer }}
          >Total</Text>

          <Text variant='headlineSmall' style={{ color: theme.colors.onPrimaryContainer, fontWeight: "bold" }}>{total} €</Text>
        </View>
        
        <Button 
          mode='contained' 
          onPress={accionComprar} 
          buttonColor={theme.colors.primary} 
          textColor={theme.colors.onPrimary} 
          style={{ alignSelf: "center" }}
          icon={"credit-card"}
        >Comprar</Button>
      </Card.Content>
    </Card>
  )
}