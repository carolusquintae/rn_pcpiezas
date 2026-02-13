import { Productos } from "@/model/Types"
import { create } from "zustand"

type ResultadoConsultaStore = {
  resultadoConsulta: Productos
  setResultadoConsulta: (rc: Productos) => void
}

export const useResultadoConsulta = create<ResultadoConsultaStore>(set => ({
  resultadoConsulta: [],
  setResultadoConsulta: (rc: Productos) => set({ resultadoConsulta: rc })
}))