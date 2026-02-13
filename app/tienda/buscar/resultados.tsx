import { FlatList, View } from 'react-native'
import React from 'react'
import { useResultadoConsulta } from '@/store/ResultadoConsultaStore'
import { Producto } from '@/model/Types'
import { useRouter } from 'expo-router'
import { useTheme } from 'react-native-paper'
import ProductoCard from '@/components/ProductoCard'

export default function resultados() {
  
  const {resultadoConsulta} = useResultadoConsulta()
  const router = useRouter()
  const theme = useTheme()

  function accionVerDetalle(producto: Producto) {
    router.replace(`/tienda/buscar/${producto.id}`)
  }

  return (
    <View className='flex-1' style={{ backgroundColor: theme.colors.background }}>
      <FlatList
        data={resultadoConsulta}
        keyExtractor={ item => item.id.toString() }
        renderItem={ ({item}) => <ProductoCard producto={item} onPress={accionVerDetalle} />}
      />
    </View>
  )
}