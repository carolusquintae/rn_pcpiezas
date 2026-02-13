import { Productos } from "@/model/Types"
import { create } from "zustand";

type CarritoStore = {
  productos: Productos,
  setProductos: (lp: Productos) => void
}

export const useCarrito = create<CarritoStore>(set => ({
  productos: [],
  setProductos: (lp: Productos) => set({ productos: lp })
}))