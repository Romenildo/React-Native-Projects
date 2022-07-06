import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#efefef",
        alignItems:"center",
        borderColor:"#8A2BE2",
        borderLeftWidth:5,
        borderRightWidth:5,
        borderBottomWidth:7,
        height:"84%",
        bottom:0
    },
    textInput:{
        fontSize:28,
        marginTop:20,
        alignSelf:"center"
    },
    campoInput:{
        height:50,
        fontSize:24,
        alignSelf:"center",
        width:200,
        textAlign:"center"
    },
    botao:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 9,
        elevation: 5,
        backgroundColor: "#8A2BE2",
        marginTop:12
    },
    textBotao:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})

export default styles;