import { ScrollView, View } from 'react-native'
import React from 'react'
import CategoriaCard from '@/components/CategoriaCard'
import { Chip, Text, useTheme } from 'react-native-paper'
import ProductoCard from '@/components/ProductoCard'
import { Producto } from '@/model/Types'

export default function inicio() {
  
  const theme = useTheme()

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <ScrollView>
        <Text variant='headlineSmall' style={{ color: theme.colors.onBackground, textAlign: "center" }}>
          Somos los mejores!
        </Text>
        <View className='flex-row flex-wrap justify-between m-3 gap-3'>
          <Chip mode='outlined' icon={"tag"}>Ofertas especiales</Chip>
          <Chip mode='outlined' icon={"wrench"}>Servicio técnico</Chip>
          <Chip mode='outlined' icon={"magnify"}>Tenemos de todo</Chip>
          <Chip mode='outlined' icon={"account"}>Trato personal</Chip>
        </View>
        
        <Text variant='headlineSmall' style={{ color: theme.colors.onBackground, marginBottom: 10 }}>
          Especialistas en 
        </Text>

        <View className='flex-row gap-3 justify-evenly'>
          <CategoriaCard 
            nombre={"Ordenadores"} 
            imagen={"https://thumb.pccomponentes.com/w-530-530/articles/33/332443/1398-tempest-umbra-rgb-torre-atx-negra-caracteristicas.jpg"} 
          />

          <CategoriaCard 
            nombre={"Smartphones"} 
            imagen={"https://s2.elespanol.com/2024/12/05/omicrono/analisis-prueba-productos/906420258_251468366_1706x960.jpg"} 
          />
        </View>
      
        <View className='flex-row gap-3 justify-evenly mt-3 mb-3'>
          <CategoriaCard 
            nombre={"Reparaciones"} 
            imagen={"https://www.incomaz.com/wp-content/uploads/2019/12/reparacion-de-portatiles.jpg"} 
          />

          <CategoriaCard 
            nombre={"Accesorios"} 
            imagen={"https://st2.depositphotos.com/2272943/5953/i/450/depositphotos_59537013-stock-photo-computer-peripherals-laptop-accessories-composition.jpg"} 
          />
        </View>
      </ScrollView>
    </View>
  )
}