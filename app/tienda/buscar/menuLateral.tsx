import { Pressable, View, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme, Text, List, Icon, Divider } from 'react-native-paper'
import { useConsulta } from '@/store/ConsultaStore'
import { Categoria, CATEGORIAS } from '@/model/Types'
import { useRouter } from 'expo-router'

export default function menuLateral() {
  
  const { setConsulta } = useConsulta()
  const theme = useTheme()
  const router = useRouter()
  const { width } = Dimensions.get('window')
  
  function consultarCategoria(categoria: Categoria) {
    setConsulta({ 
      categoriaId: categoria.id 
    })

    router.replace("/tienda/buscar/consulta")
  }

  const styles = StyleSheet.create({
    contenedor: { 
      width: width * 0.6,
      height: '100%',
      backgroundColor: theme.colors.surface,
      position: 'absolute',
      top: 0,
      left: 0,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      paddingVertical: 24,
      elevation: 5,
    },
    text: { 
      textAlign: 'center', 
      color: theme.colors.primary,
      fontWeight: 'bold',
      marginBottom: 16
    }
  })

  return (
    <View className='flex-1 flex-row'>
      <View style={styles.contenedor}>
        <Text variant='titleLarge' style={styles.text}>Categorías</Text>
        <Divider style={{ marginBottom: 8 }} />
        {
          CATEGORIAS.map(categoria => <List.Item
                                        key={categoria.id}
                                        title={categoria.nombre}
                                        titleStyle={{ color: theme.colors.onSurface }}
                                        left={props => <List.Icon {...props} icon={categoria.icono} color={theme.colors.primary} />}
                                        onPress={() => consultarCategoria(categoria)}
                                        style={{ paddingVertical: 8 }}
                                      />
                        )
        }
      </View>

      <Pressable 
        onPress={() => router.back()}
        style={{ 
          width: width * 0.4,
          height: '100%',
          marginLeft: width * 0.6,
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}
      />
    </View>
  )
}