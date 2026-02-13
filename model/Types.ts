export type Categoria = {
  id: string,
  nombre: string,
  icono: string
}

export type Categorias = Array<Categoria>

export const CATEGORIAS: Categorias = require("../data/categorias.json")

export type Producto = {
  id: string,
  nombre: string,
  marca: string,
  precio: number,
  estrellas: number,
  valoraciones: number,
  imagen: string,
  categoriaId: string,
  descuento: number
}

export type Caracteristicas = Record<string, string>

export type DetalleProducto = Producto & {
  caracteristicas: Caracteristicas,
  descripcion: string
}

export type Productos = Array<Producto>

export type Carrito = Array<Producto>

export type Consulta = {
  texto?: string,
  marca?: string,
  precioMin?: number,
  precioMax?: number,
  categoriaId?: string
}