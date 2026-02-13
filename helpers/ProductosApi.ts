import { Platform } from "react-native";
import request, { gql } from "graphql-request";
import { Consulta, DetalleProducto, Productos } from "@/model/Types";

// const IP = Platform.OS === "android" ? "10.0.2.2" : "localhost"
const IP = "192.168.70.65"  // "192.168.1.118"
const URL = `http://${IP}:3000`

export async function buscarProductos(consulta: Consulta): Promise<Productos> {
  const sentencia = gql`
    query consultarProductos(
      $texto: String
      $marca: String
      $categoriaId: String
      $precioMin: Float
      $precioMax: Float
    ) {
      allProductos(
        filter: {
          q: $texto
          marca: $marca
          categoriaId: $categoriaId
          precio_gt: $precioMin
          precio_lt: $precioMax
        }
      ) {
        id
        imagen
        marca
        nombre
        precio
        valoraciones
        estrellas
        categoriaId
      }
    }
  `
  const respuesta = await request(URL, sentencia, consulta)
  return respuesta.allProductos
}

export async function consultarDetalle(id: string): Promise<DetalleProducto> {
  const sentencia = gql`
    query ($id: ID) {
      allProductos(filter: {
        id: $id
      }) {
        id
        nombre
        marca
        precio
        estrellas
        valoraciones
        imagen
        categoriaId
        descuento
        caracteristicas
        descripcion
      }
    }
  `
  const data = await request(URL, sentencia, {id})
  return data.allProductos[0]
}