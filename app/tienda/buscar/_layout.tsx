import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { IconButton, useTheme } from 'react-native-paper'
import '@/animations/Animations'

export default function _layout() {
  
  const theme = useTheme()
  const router = useRouter()

  return (
    <Stack 
      initialRouteName='buscador'
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.onPrimary,
        title: "Buscador de productos",
        headerLeft: () => <IconButton 
                            icon={"menu"} 
                            size={28} 
                            iconColor={theme.colors.onPrimary} 
                            onPress={() => router.push("/tienda/buscar/menuLateral")} 
                          />
      }}
    >
      <Stack.Screen
        name='resultados'
        options={{
          title: "Resultados de la búsqueda",
          animation: "none"
        }}
      />

      <Stack.Screen
        name='consulta'
        options={{
          animation: "none",
          headerShown: false,
          presentation: "modal"
        }}
      />

      <Stack.Screen
        name='menuLateral'
        options={{
          animation: "none",
          headerShown: false,
          presentation: "modal"
        }}
      />
    </Stack>
  )
}