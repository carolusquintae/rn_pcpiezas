import React from 'react'
import { Tabs } from 'expo-router'
import { Badge, Icon, useTheme } from 'react-native-paper'
import { useCarrito } from '@/store/CarritoStore'
import { View } from 'react-native'
import ProductosComprados from '@/components/ProductosComprados'

export default function _layout() {
  
  const theme = useTheme()
  const {productos, setProductos} = useCarrito()

  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.outline
        }
      }}
    >
      <Tabs.Screen
        name='inicio'
        options={{
          title: "PC Piezas",
          tabBarLabel: "Inicio",
          tabBarIcon: ({color, size}) => <Icon source={"home-outline"} size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name='buscar'
        options={{
          title: "Buscar",
          headerShown: false,
          tabBarIcon: ({color, size}) => <Icon source={"magnify"} size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name='carrito'
        options={{
          title: "Carrito",
          tabBarIcon: ({color, size}) => (
            <View>
              <Icon source={"cart-outline"} size={size} color={color} />
              <ProductosComprados cantidad={productos.length} />
            </View>
          )
        }}
      />

      <Tabs.Screen
        name='ajustes'
        options={{
          title: "Ajustes",
          tabBarIcon: ({color, size}) => <Icon source={"tune-variant"} size={size} color={color} />
        }}
      />
    </Tabs>
  )
}