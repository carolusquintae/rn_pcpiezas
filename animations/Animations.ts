import * as Animatable from 'react-native-animatable'
import { Badge, Card } from 'react-native-paper'

Animatable.initializeRegistryWithDefinitions({
  entradaDrawer: {
    from: { 
      translateX: -300 
    },
    to: { 
      translateX: 0 
    }
  },
  salidaDrawer: {
    from: { 
      translateX: 0 
    },
    to: { 
      translateX: -300 
    }
  }
})

export const AnimatableCard = Animatable.createAnimatableComponent(Card)
export const AnimatableBadge = Animatable.createAnimatableComponent(Badge)