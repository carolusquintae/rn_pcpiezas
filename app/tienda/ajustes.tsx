import { View, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useTheme, Text, Divider, RadioButton, Button } from 'react-native-paper'
import { useTema } from '@/store/TemaStore'
import { recuperarModo, cambiarModo, getTema } from '@/themes/FuncionesTema'
import { replaceError } from '@/nav/Navegacion'
import { useRouter } from 'expo-router'

export default function ajustes() {
  
  const [modo, setModo] = useState("auto")
  const {setTema} = useTema()
  const theme = useTheme()
  const temaDispositivo = useColorScheme() ?? "light"
  const router = useRouter()
  
  function accionRecuperarModo() {
    recuperarModo()
      .then(modo => setModo(modo))
      .catch(() => setModo('auto'))
  }
  
  useEffect(accionRecuperarModo, [])
  
  function accionCambiarModo() {
    cambiarModo(modo)
      .then(() => setTema(getTema(modo, temaDispositivo)))
      .catch(error => replaceError(router, "Error", error.toString()))
  }
  
  return (
    <View className='flex-1 p-16' style={{ backgroundColor: theme.colors.background }}>
      <Text variant='titleLarge'>Tema</Text>
      <Divider style={{ marginVertical: 16 }} />
      
      <RadioButton.Group 
        value={modo} 
        onValueChange={value => setModo(value)}
      >
        <RadioButton.Item 
          label="claro" 
          value="light" 
          position="trailing"
          labelStyle={{ color: theme.colors.onSurface }}
        />

        <RadioButton.Item 
          label="oscuro" 
          value="dark"
          position="trailing"
          labelStyle={{ color: theme.colors.onSurface }}
        />

        <RadioButton.Item 
          label="automático" 
          value="auto"
          position="trailing"
          labelStyle={{ color: theme.colors.onSurface }}
        />
      </RadioButton.Group>
      <Button mode='contained' onPress={accionCambiarModo} style={{ marginTop: 24 }}>Guardar</Button>
    </View>
  )
}