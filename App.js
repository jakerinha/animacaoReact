import React, {useRef, useState} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Alert, Platform, Animated } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import Writer from "./components/Writer"

const TAMANHO_CIRCULO = 100

const Circulo = ({ onPress, animatedValue }) => {

  const animatedBackground = animatedValue.interpolate({
    inputRange:[0, 0.0001, 0.5, 0.5001, 1],
    outputRange:["#f2cdac","#ffffff", "#ff0000", "#ff0","#bbccaa"]
  })

  const animatedText = animatedValue.interpolate({
    inputRange:[0, 0.5, 1],
    outputRange:[20, 35, 20]
  })

  const animatedColor = animatedValue.interpolate({
    inputRange:[0, 0.5, 1],
    outputRange:["#bbccaa", "#ffffff", "#f2cdac"]
  })


  return(
    <Animated.View style = {(StyleSheet.absoluteFillObject, styles.ContainerCirculo,
    {backgroundColor: animatedBackground})}>
      <Text style={styles.Titulo}>Animações em React Native</Text>
      <Writer/>
      <Animated.Text style={{
        fontSize: animatedText,
        margin: 10,
        color: animatedColor}}>Frase Importante sobre React Native com animações</Animated.Text>
      <Animated.View style={[styles.Circulo, {
        transform:[
        {
          rotateY: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '-90deg', '-180deg']
          })
        },
        {
          scale: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange:[1,2,1]
          })
        },
        {
          translateX: animatedValue.interpolate({
            inputRange:[0, 0.5, 1],
            outputRange: [0, 75, 0]
          })
        }
        ]
      }]}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.Circulo}>
            <AntDesign name="arrowright" size={28} color={"#bc4227"}/>
          </View>
        </TouchableOpacity>

      </Animated.View>
    </Animated.View>
  )
}

export default function App(){

  /*useRef é um HOOK que retorna um objeto mutável, no qual a propriedade 
   *CURRENT é inicializado com o argumento passado.
   *o objeto retornado persistirá durante todo o ciclo de vida do componente.
   */

  const animatedValue = useRef( new Animated.Value(0)).current //Variação entre 0 e 1. Ex.: 0.001; 0.05; 0.1
  const [indice, setIndice] = useState(0)

  const animation = (toValue) => Animated.timing(animatedValue, {
    toValue: toValue,
    duration: 3000,
    useNativeDriver: false
  })

  const onPress = () => {
    setIndice(indice === 1 ? 0 : 1)
    animation(indice === 1 ? 0 : 1).start()

    /*let mensagem = "Você clicou! :D"
    if(Platform.OS === 'web'){
      alert(mensagem)
    }else{
      Alert.alert(
        "Aviso",
        mensagem,
        [{
          text:'Cancelar',
          onPress: () => console.log("Pressionou o cancelar"),
          style: 'cancel'  
        },
      {
        text: 'OK',
        onPress: () => console.log("Pressionou OK")
      }],{
        cancelable: false //Retira o comportamento do CANCELAR clicando em qualquer lugar da tela
      })
    }

    
  }
  */
  }
  //O return possibilita a renderização dos componentes na tela.
  return(
    <View style={styles.Container}>
      <Circulo onPress={onPress} animatedValue={animatedValue}/>
    </View>
  )
  
}
const styles = StyleSheet.create({

  Container:{
    flex: 1,
    backgroundColor: "#F2CDAC",
    alignItems: 'center'
  },
  Titulo:{
    fontSize: 25,
    color: "#d99873",
    paddingTop: 20
  },
  ContainerCirculo:{
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    paddingBottom: TAMANHO_CIRCULO
  },
  Circulo:{
    backgroundColor: "#d99873",
    width: TAMANHO_CIRCULO,
    height: TAMANHO_CIRCULO,
    borderRadius: TAMANHO_CIRCULO/2,
    justifyContent: 'center',
    alignItems: 'center'
  }

})