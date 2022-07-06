import { View, Text } from 'react-native'
import React from 'react'
import Form from '../Form'
import Titulo from '../Titulo'


const Main = () => {
  return (
    <View>
      <Titulo titulo='Calcular IMC'/>
      <Form/>
    </View>
  )
}


export default Main