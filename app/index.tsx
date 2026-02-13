import { View } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from "expo-image"
import { useRouter } from 'expo-router'
import * as Animatable from 'react-native-animatable'

export default function index() {
  
  const router = useRouter()
  
  useEffect(() => {
    const timer = setTimeout(() => router.push("/tienda/inicio"), 700)
    return () => clearTimeout(timer)
  }, [router])
  
  return (
    <Animatable.View 
      className='flex-1 justify-center items-center' 
      style={{ backgroundColor: "#e8f7ff" }}
      animation={"zoomIn"}
      duration={700}
      delay={120}
    >
      <Image
        source={require("../assets/logo.png")}
        contentFit='cover'
        style={{ width: 210, height: 170 }}
        className='rounded-lg'
      />
    </Animatable.View>
  )
}