import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Touchable, Alert, Platform} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import Writer from "./components/Writer"

const TAMANHO_CIRCULO = 100

const Circulo = ({ onPress }) => {
  return(
    <View style = {(StyleSheet.absoluteFillObject, styles.ContainerCirculo)}>
      <Text style={styles.Titulo}>Animações em React Native</Text>
      <Writer/>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.Circulo}>
          <AntDesign name="arrowright" size={28} color={"#bc4227"}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default function App(){

  const onPress = () => {
    let mensagem = "Você clicou! :D"
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

  return(
    <View style={styles.Container}>
      <Circulo onPress={onPress}/>
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