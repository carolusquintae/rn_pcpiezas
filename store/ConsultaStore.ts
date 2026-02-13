import { Consulta } from "@/model/Types"
import { create } from "zustand"

type ConsultaStore = {
  consulta: Consulta,
  setConsulta: (c: Consulta) => void
}

export const useConsulta = create<ConsultaStore>(set => ({
  consulta: {},
  setConsulta: (c: Consulta) => set({ consulta: c })
}))