import '../global.css'
import React, { useEffect } from 'react'
import { PaperProvider } from 'react-native-paper'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { temaClaro } from '@/themes/TemaClaro'
import { temaOscuro } from '@/themes/TemaOscuro'
import { useTema } from '@/store/TemaStore'
import { getTema, recuperarModo } from '@/themes/FuncionesTema'

export default function _layout() {

  const {tema, setTema} = useTema()
  const temaDispositivo = useColorScheme() ?? "light"

  function accionRecuperarTema() {
    recuperarModo()
      .then(modo => setTema(getTema(modo, temaDispositivo)))
      .catch(() => setTema(getTema("auto", temaDispositivo)))
  }

  useEffect(accionRecuperarTema, [temaDispositivo])
  
  return (
    <PaperProvider theme={tema}>
      <Stack initialRouteName='index'>
        <Stack.Screen 
          name='index'
          options={{
            headerShown: false
          }}
          />

        <Stack.Screen
          name='tienda'
          options={{
            headerShown: false,
            animation: "fade"
          }}
        />
      </Stack>
    </PaperProvider>
  )
}