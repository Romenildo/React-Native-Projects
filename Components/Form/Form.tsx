import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import ResultadoIMC from '../ResultadoIMC'
import { useState } from 'react'
import styles from './style'

const Form = () => {

    //useState com as variaves e o set para mudar dinamicamente na tela
    const [altura, setAltura] = useState<any>(null);
    const [peso, setPeso] = useState<any>(null);
    const [buttonText, setButtonText] = useState<string>("Calcular IMC");
    const [msgResultado, setMsgResultado] = useState<string>("");
    const [resultado, setResultado] = useState<any>(null);



    const validarIMC= () =>{//Funcao ao clicar no botao de calcular
      //faz a verificacao se os valores estao colocados ou maiores que zero
        if((altura!=null && altura>0) || (peso !=null && peso > 0)){
            calcularIMC()
            setAltura(null)
            setPeso(null)
            setMsgResultado("Seu IMC é:")
            setButtonText("Re-Calcular IMC")
            return
        }
        //caso der errado a verificazao nula o resultado e avisa o erro
        setButtonText("Calcular IMC")
        setResultado(null)
        setMsgResultado("Valor invalido")
    }

    const calcularIMC = ()=>{
        return setResultado((peso/ (altura * altura)).toFixed(2))
    }

  return (
    <View style={styles.container}>{/* Div central */}
      <View >{/* Div do formulario */}
        <Text style={styles.textInput}>Peso:</Text>
        <TextInput
             placeholder='Ex: 80.00'/*Valor que fica no input transparente */
             keyboardType='numeric'/* peso o tipo do teclado para somente numeros */
             value={peso}/*valor da variavel do input */
             onChangeText={setPeso}/* ativa a funcao toda vez que o input mudar*/
             style={styles.campoInput}
             underlineColorAndroid={"#8A2BE2"} selectionColor={"#8A2BE2"}
        />
             
        <Text style={styles.textInput} > Altura:</Text>
        <TextInput placeholder='Ex: 1.80'  keyboardType='numeric'
                   value={altura} onChangeText= {setAltura} style={styles.campoInput}
                   underlineColorAndroid={"#8A2BE2"} selectionColor={"#8A2BE2"}
         />
         {/* */}

        <Pressable style={styles.botao}  onPress={()=> validarIMC()}>
           <Text style={styles.textBotao} >{buttonText}</Text>
        </Pressable>
      </View>

      {/*Component de uma div que msotra o resultado e a mensagem */}
      <ResultadoIMC msgResultado={msgResultado} resultado = {resultado}/>

    </View>
  )
}

export default Form