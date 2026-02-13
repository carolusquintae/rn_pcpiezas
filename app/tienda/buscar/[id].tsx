import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CATEGORIAS, DetalleProducto, Producto } from '@/model/Types'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { useCarrito } from '@/store/CarritoStore'
import { consultarDetalle } from '@/helpers/ProductosApi'
import { replaceError } from '@/nav/Navegacion'
import { useTheme, Text, Chip, Icon, DataTable, Button, IconButton } from 'react-native-paper'
import { Image } from 'expo-image'

export default function detalleProducto() {
  
  const [producto, setProducto] = useState<DetalleProducto | undefined>(undefined)
  const {productos, setProductos} = useCarrito()
  const {id, carrito} = useLocalSearchParams<{id: string, carrito: string}>()
  const router = useRouter()
  const theme = useTheme()
  const categoria = CATEGORIAS[0]
  
  function accionConsultarDetalle() {
    consultarDetalle(id)
      .then(dp => setProducto(dp))
      .catch(error => replaceError(router, "Error al buscar el detalle del producto", error.toString()))
  }

  useEffect(accionConsultarDetalle, [])

  function accionAñadirProducto() {
    if (!producto) {
      return
    }
    
    const nuevoProducto: Producto = {
      id: producto.id,
      nombre: producto.nombre,
      marca: producto.marca,
      precio: producto.precio,
      estrellas: producto.estrellas,
      valoraciones: producto.valoraciones,
      imagen: producto.imagen,
      categoriaId: producto.categoriaId,
      descuento: producto.descuento
    }

    setProductos([...productos, nuevoProducto])
    
    router.back()                   // Salimos del detalle del producto -> vamos a resultados
    router.back()                   // Salimos de resultados -> vamos a buscador  
    router.push('/tienda/carrito')  // Navegamos directamente a carrito
  }

  const generarEstrellas = (numero: number): Array<number> => [...Array(Math.floor(numero)).keys()]

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <IconButton 
              icon={"arrow-left"} 
              iconColor={theme.colors.onPrimary} 
              onPress={() => carrito ? router.push("/tienda/carrito") : router.back()} 
            />
          ),
          headerTitle: () => (
            <View>
              <Text variant='titleMedium' style={{ color: theme.colors.onPrimary }}>{producto?.nombre ?? ""}</Text>
              <Text variant='titleSmall' style={{ color: theme.colors.onPrimary }}>{producto?.marca ?? ""}</Text>
            </View>
          )
        }}
      />

      {
        producto !== undefined ? (
          <View style={{ backgroundColor: theme.colors.background }}>
            <Image 
              source={{ uri: producto.imagen }} 
              className='w-full h-250' 
              style={{ backgroundColor: "#ffffff" }} 
              contentFit='contain' 
            />

            <View>
              <Text variant='titleLarge'>{producto.nombre}</Text>
              <View className='flex-row'>
                <Text variant='bodyMedium' style={{ color: theme.colors.onSurfaceVariant }}>
                  {producto.marca}
                </Text>
        
                <Chip icon={() => <Icon size={16} source={categoria.icono} />}>
                  {categoria.nombre}
                </Chip>
              </View>

              <Text variant='titleMedium' style={{ color: theme.colors.primary }}>
                {producto.precio} €
              </Text>
        
              <View className='flex-row gap-3'>
                {
                  generarEstrellas(producto.estrellas).map(e => <Icon 
                                                                  key={e} 
                                                                  source={"star"} 
                                                                  size={20} 
                                                                  color={theme.colors.primary} 
                                                                />
                                                          )
                }
                {
                  generarEstrellas(5 - producto.estrellas).map(e => <Icon 
                                                                      key={e} 
                                                                      source={"star-outline"} 
                                                                      size={20} 
                                                                      color={theme.colors.primary} 
                                                                    />
                                                              )
                }
                <Text variant='bodyMedium'>({producto.valoraciones})</Text>
              </View>
              
              <Text variant='bodyMedium'>{producto.descripcion}</Text>
              <Text variant='titleMedium'>Características</Text>
              
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell>Núcleos</DataTable.Cell>
                  <DataTable.Cell>{producto.caracteristicas.Nucleos}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Frecuencia</DataTable.Cell>
                  <DataTable.Cell>{producto.caracteristicas.Frecuencia}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Socket</DataTable.Cell>
                  <DataTable.Cell>{producto.caracteristicas.Socket}</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
              
            <Button mode='contained' onPress={accionAñadirProducto}>Añadir al carrito</Button>
          </View>
        ) : <View className='flex-1' />
      }
    </>
  )
}