import { View } from 'react-native'
import React, { useEffect } from 'react'
import { useConsulta } from '@/store/ConsultaStore'
import { buscarProductos } from '@/helpers/ProductosApi'
import { useResultadoConsulta } from '@/store/ResultadoConsultaStore'
import { replaceError } from '@/nav/Navegacion'
import { useRouter } from 'expo-router'
import { ActivityIndicator, Card, Text, useTheme } from 'react-native-paper'

export default function consulta() {
  
  const {consulta} = useConsulta()
  const {setResultadoConsulta} = useResultadoConsulta()
  const router = useRouter()
  const theme = useTheme()
  
  function accionBuscarProductos() {
    buscarProductos(consulta)
      .then(listaResultados => {
        setResultadoConsulta(listaResultados)
        router.replace("/tienda/buscar/resultados")
      })
      .catch(error => replaceError(router, "Error al buscar el producto", error.toString()))
  }

  useEffect(accionBuscarProductos, [])
  
  return (
    <View className='flex-1 items-center justify-center' style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      <Card 
        className='p-24 justify-center min-w-180' 
        style={{ backgroundColor: theme.colors.surface, borderRadius: theme.roundness, elevation: 5 }}
      >
        <ActivityIndicator size={"large"} color={theme.colors.primary} />
        <Text variant='titleMedium' style={{ color: theme.colors.onSurface }}>
          Cargando...
        </Text>
      </Card>
    </View>
  )
}