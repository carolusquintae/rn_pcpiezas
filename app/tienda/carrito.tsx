import { Alert, FlatList, View } from 'react-native'
import React from 'react'
import { useCarrito } from '@/store/CarritoStore'
import { Producto } from '@/model/Types'
import { useTheme } from 'react-native-paper'
import CabeceraCarrito from '@/components/CabeceraCarrito'
import ProductoItem from '@/components/ProductoItem'
import { useRouter } from 'expo-router'

export default function carrito() {
  
  const {productos, setProductos} = useCarrito()
  const theme = useTheme()
  const router = useRouter()
  const calcularPrecioTotal = (): number => productos.reduce((suma, p) => suma + p.precio, 0)
  const accionRetirarProducto = (producto: Producto) => setProductos(productos.filter(p => p.id === producto.id))

  function accionVerDetalle(producto: Producto) {
    router.push({
      pathname: "/tienda/buscar/[id]",
      params: {
        id: producto.id,
        carrito: "si"
      }
    })
  }

  function accionComprar() {
    Alert.alert("Error", "Falta implementar la funcionalidad de la compra")
  }

  return (
    <View className='flex-1'>
      <CabeceraCarrito total={calcularPrecioTotal()} accionComprar={accionComprar} />
      <FlatList
        data={productos}
        keyExtractor={item => item.id.toString()}
        renderItem={ ({item}) => <ProductoItem producto={item} accionRetirarProducto={accionRetirarProducto} /> }
      />
    </View>
  )
}