import { temaClaro } from "@/themes/TemaClaro"
import { ThemeBase } from "react-native-paper"
import { create } from "zustand"

type TemaStore = {
  tema: ThemeBase,
  setTema: (t: ThemeBase) => void
}

export const useTema = create<TemaStore>(set => ({
  tema: temaClaro,
  setTema: (t) => set({ tema: t })
}))