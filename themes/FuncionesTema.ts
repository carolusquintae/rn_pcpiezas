import AsyncStorage from '@react-native-async-storage/async-storage'
import { ColorSchemeName } from 'react-native'
import { temaClaro } from './TemaClaro'
import { temaOscuro } from './TemaOscuro'

export async function recuperarModo(): Promise<string> {
  return await AsyncStorage.getItem("modo") ?? "auto"
}

export function getTema(modo: string, temaDispositivo: ColorSchemeName) {
  return modo === "dark" || (modo === "auto" && temaDispositivo === "dark") ? temaOscuro : temaClaro
}

export async function cambiarModo(modo: string) {
  await AsyncStorage.setItem("modo", modo)
}