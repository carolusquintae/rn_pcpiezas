import { View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Badge, useTheme } from 'react-native-paper'
import { AnimatableBadge } from '@/animations/Animations'

type ProductosCompradosProps = {
  cantidad: number
}

export default function ProductosComprados({cantidad}: ProductosCompradosProps) {

  const theme = useTheme()
  const badge = useRef<any>(undefined)
  const ejecutarAnimacion = () => badge.current?.zoomIn?.(150)

  useEffect(() => {
    if (cantidad > 0) {
      ejecutarAnimacion()
    }
  }, [cantidad])
  

  return (
    <View>
      {
        cantidad > 0 && (
          <AnimatableBadge ref={badge} size={16} style={{ 
            backgroundColor: theme.colors.tertiary, 
            color: theme.colors.onPrimary,
            position: "absolute", 
            top: -4, 
            right: -10
          }}>{cantidad}</AnimatableBadge>
        )
      }
    </View>
  )
}