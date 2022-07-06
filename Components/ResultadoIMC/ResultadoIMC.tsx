import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

interface ResultadoIMCProps {
  msgResultado: string;
  resultado: any;
}


const ResultadoIMC = ({msgResultado, resultado}: ResultadoIMCProps) => {
  return (
    <View>
      <Text style={style.msgResultado} >{msgResultado}</Text>
      <Text style={style.textResultado}>{resultado}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  msgResultado:{
    color:"#8A2BE2",
    fontSize:20,
    marginTop:25,
    alignSelf:"center"
  },
  textResultado:{
    color:"#8A2BE2",
    fontSize:80

  }
})

export default ResultadoIMC