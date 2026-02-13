import { Router } from 'expo-router'

export function pushError(router: Router, mensaje: string, descripcion: string) {
  router.push({
    pathname: "/error",
    params: {
      mensaje,
      descripcion
    }
  })
}

export function replaceError(router: Router, mensaje: string, descripcion: string) {
  router.replace({
    pathname: "/error",
    params: {
      mensaje,
      descripcion
    }
  })
}