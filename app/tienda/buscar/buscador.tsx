import { View } from 'react-native'
import React, { useState } from 'react'
import { useConsulta } from '@/store/ConsultaStore'
import { CATEGORIAS, Consulta } from '@/model/Types'
import { useRouter } from 'expo-router'
import { Icon, List, Searchbar, TextInput, Text, useTheme, Checkbox } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import RangeSlider from 'rn-range-slider'

export default function buscador() {
  
  const [textoConsulta, setTextoConsulta] = useState("")
  const [marca, setMarca] = useState("")
  const [categoriaId, setCategoriaId] = useState<string | undefined>(undefined)
  const [precioHabilitado, setPrecioHabilitado] = useState(false)
  const [precioMin, setPrecioMin] = useState(0)
  const [precioMax, setPrecioMax] = useState(2000)
  const {setConsulta} = useConsulta()
  const router = useRouter()
  const theme = useTheme()

  function prepararConsulta() {
    const consulta: Consulta = {}

    if (textoConsulta.trim() !== "") {
      consulta.texto = textoConsulta
    }

    if (marca.trim() !== "") {
      consulta.marca = marca
    }

    if (categoriaId) {
      consulta.categoriaId = categoriaId
    }

    if (precioHabilitado) {
      consulta.precioMin = precioMin
      consulta.precioMax = precioMax
    }

    setConsulta(consulta)
  }

  function resetearFormulario() {
    setTextoConsulta("")
    setMarca("")
    setCategoriaId("")
    setPrecioHabilitado(false)
    setPrecioMin(0)
    setPrecioMax(2000)
  }
  
  function accionRealizarConsulta() {
    prepararConsulta()
    resetearFormulario()
    router.push('/tienda/buscar/consulta')
  }
  
  const styles = {
    thumb: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: precioHabilitado ? theme.colors.primary : theme.colors.surfaceVariant
    },
    rail: {
      height: 4,
      borderRadius: 2,
      backgroundColor: theme.colors.surfaceVariant
    },
    railSelected: {
      height: 4,
      borderRadius: 2,
      backgroundColor: precioHabilitado ? theme.colors.primary : theme.colors.surfaceVariant
    }
  }

  return (
    <View className='m-3'>
      <Searchbar 
        placeholder='¿Qué estás buscando?' 
        value={textoConsulta}
        onChangeText={setTextoConsulta}
        onSubmitEditing={accionRealizarConsulta}
      />

      <List.Accordion 
        title={"Búsqueda avanzada"} 
        left={() => <Icon size={22} source={"filter-variant"} />}
        style={{ marginTop: 15 }}
      >
        <View>
          <TextInput 
            mode='outlined' 
            placeholder={"Marca"} 
            value={marca} 
            onChangeText={setMarca} 
          />

          <Text variant='labelMedium' style={{ color: theme.colors.onSurfaceVariant, marginTop: 10 }}>
            Categoría
          </Text>

          <View style={{ borderWidth: 1, borderColor: theme.colors.outline, borderRadius: theme.roundness }}>
            <Picker 
              selectedValue={categoriaId} 
              onValueChange={valor => setCategoriaId(valor === "todas" ? undefined : valor)}
            >
              <Picker.Item 
                label={"Todas"} 
                value={"todas"} 
                key={"todas"} 
              />
              {
                CATEGORIAS.map(categoria => <Picker.Item label={categoria.nombre} value={categoria.id} key={categoria.id} />)
              }
            </Picker>
          </View>

          <View className='flex-row gap-0.5'>
            <Checkbox
              status={precioHabilitado ? 'checked' : 'unchecked'}
              onPress={() => setPrecioHabilitado(!precioHabilitado)}
              color={theme.colors.primary}
            />
            <Text variant='labelMedium' style={{ color: theme.colors.onSurfaceVariant, marginTop: 10 }}>
              Precio ({precioMin} € - {precioMax} €)
            </Text>
          </View>

          <RangeSlider
            disabled={!precioHabilitado}
            min={0}
            max={2000}
            step={10}
            low={precioMin}
            high={precioMax}
            onValueChanged={(low, high) => {
              setPrecioMin(low)
              setPrecioMax(high)
            }}
            renderThumb={() => <View style={styles.thumb} />}
            renderRail={() => <View style={styles.rail} />}
            renderRailSelected={() => <View style={styles.railSelected} />}
          />
        </View>
      </List.Accordion>
    </View>
  )
}