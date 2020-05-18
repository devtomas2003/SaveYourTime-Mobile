import React, { useEffect } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faTicketAlt, faUser, faMapMarkedAlt, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
 
var go = null;

const slides = [
  {
    key: 1,
    title: 'Cansado das Filas?',
    subtitle: 'Nunca mais espere 1 minuto com a APP',
    subtitleTwo: '#SaveYourTime',
    haveBtn: false,
    icon: faClock,
    background: '#4082ee',
  },
  {
    key: 2,
    title: 'Como funciona?',
    subtitle: 'Tire uma senha virtualmente e espere no carro, ou até mesmo em casa!',
    subtitleTwo: '#StayAtHome',
    haveBtn: false,
    icon: faTicketAlt,
    background: '#fbbc05',
  },
  {
    key: 3,
    title: 'Veja em tempo real!',
    subtitle: 'Quantas pessoas estão a espera para entrar no estabelecimento?',
    subtitleTwo: 'Simples, facil e rapido!',
    icon: faUser,
    haveBtn: false,
    background: '#ea4335',
  },
  {
    key: 4,
    title: 'Nos ajudamos a pesquisar!',
    subtitle: 'Nós mostramos numa lista todos os estabelecimentos que aderiram ao SaveYourTime.',
    subtitleTwo: 'Para isto precisamos da permissão de acesso ao GPS',
    icon: faMapMarkedAlt,
    background: '#34a853',
    btnText: 'Conceder Permissão',
    btnNoPermission: 'Continuar sem GPS',
    haveBtn: true,
    endSlide: true
  }
];
 
export default function Sliders({ navigation }) {
  go = navigation;
  useEffect(() => {
    AsyncStorage.getItem("toturial").then(toturial => {
        if(toturial){
          navigation.navigate("Regiao");
        }
    });
}, []);
return(
  <AppIntroSlider renderItem={renderItem} data={slides} showDoneButton={false} renderNextButton={renderNext} renderPrevButton={renderPrev} showPrevButton={true} />
);
}

function renderItem({item}){
    return (
      <View backgroundColor={item.background} style={styles.background}>
        <Text style={styles.titleSlider}>{item.title}</Text>
        <FontAwesomeIcon size={180} style={styles.wellIcon} icon={ item.icon } />
        <Text style={styles.subtitleSlider}>{item.subtitle}</Text>
        { item.haveBtn ? <Text style={styles.subtitleTwoBtn}>{item.subtitleTwo}</Text> : <Text style={styles.titleSlider}>{item.subtitleTwo}</Text> }
        { item.haveBtn ? <TouchableHighlight onPress={requestPermission} style={styles.btnGPS}><Text style={styles.btnText}>{item.btnText}</Text></TouchableHighlight> : null }
        { item.endSlide ? <TouchableHighlight onPress={skipPermission} style={styles.btnClose}><Text style={styles.btnText}>{item.btnNoPermission}</Text></TouchableHighlight> : null }
      </View>
    );
}

function requestPermission() {
  AsyncStorage.setItem("toturial", "1");
  go.navigate("Regiao");
}

function skipPermission() {
  AsyncStorage.setItem("toturial", "1");
  go.navigate("Regiao");
}

function renderNext() {
  return (
    <View style={styles.buttonCircle}> 
      <FontAwesomeIcon size={25} style={styles.controlIcon} transform={{ rotate: 270 }} icon={ faArrowDown } />
    </View>
  );
}

function renderPrev() {
  return (
    <View style={styles.buttonCircle}> 
      <FontAwesomeIcon size={25} style={styles.controlIcon} transform={{ rotate: 90 }} icon={ faArrowDown } />
    </View>
  );
}

const styles = StyleSheet.create({
    controlIcon: {
      color: '#FFF'
    },
    buttonCircle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
      borderRadius: 100
    },
    background: {
      flex:1,
      alignContent: 'center',
      alignItems: 'center'
    },
    titleSlider: {
      color: '#FFF',
      marginTop: 50,
      fontSize: 25,
      textAlign: 'center'
    },
    subtitleSlider: {
      color: '#FFF',
      marginTop: 50,
      fontSize: 20,
      width: '90%',
      textAlign: 'center'
    },
    wellIcon:{
      marginTop: 30,
      color: '#FFF',
    },
    subtitleTwoBtn: {
      color: '#FFF',
      marginTop: 50,
      fontSize: 18,
      width: '90%',
      textAlign: 'center'
    },
    btnGPS: {
      padding: 10,
      marginTop: 20,
      borderRadius: 4,
      backgroundColor: '#ea4335'
    },
    btnClose: {
      padding: 10,
      marginTop: 10,
      borderRadius: 4,
      backgroundColor: '#ea4335'
    },
    btnText: {
      color: '#FFF',
      fontSize: 17,
    }
});