import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


interface TituloProps{
  titulo:string;
}

const Titulo = (props:TituloProps) => {
  return (
    <View style={style.boxTitulo}>
      <Text style={style.textTitulo}>{props.titulo}</Text>
    </View>
  )
}


const style = StyleSheet.create({
  boxTitulo:{
    backgroundColor: "#8A2BE2",
    height:100,
    alignItems:"center",
    justifyContent: "center",
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  textTitulo:{
    color:"#fff",
    fontSize:30,
    fontWeight:"bold"
  }
})
export default Titulo