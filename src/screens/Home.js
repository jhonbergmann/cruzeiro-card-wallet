import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

import OneSignal from 'react-native-onesignal'
/* ID */

import moment from 'moment'
import 'moment/locale/pt-br'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

  useEffect(() => {
    OneSignal.init('d0e9c6c7-f51b-46bc-90aa-a518d92e7a43')
    OneSignal.addEventListener('opened', onOpened)
    return () => OneSignal.removeEventListener('opened', onOpened)
  }, [])

  function onOpened(result) {
    console.log('Mensagem: ', result.notification.payload.body)
    console.log('Result: ', result)
  }

  const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

  const navigation = useNavigation()

  function handleNavigationToMain() {
    navigation.navigate('LoadToMain')
  }

  return (
    <View style={styles.container}>
      <View style={styles.todayContainer}>
        <Text style={styles.title}>Olá, hoje é:</Text>
        <Text style={styles.data}>{today}</Text>
      </View>
      <Image style={styles.image}
        source={require('../../assets/imgs/logoHome/logo.png')} />
      <TouchableOpacity style={styles.button}
        onPress={handleNavigationToMain}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003b71',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 50
  },
  todayContainer: {
    width: 300,
    height: 100,
    borderRadius: 30,
    backgroundColor: '#efa616',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#F2F3F5',
    fontSize: 25,
    textAlign: 'center',
    bottom: 10
  },
  data: {
    color: '#F2F3F5',
    fontSize: 20
  },
  image: {
    width: 300,
    resizeMode: 'contain'
  },
  button: {
    width: 120,
    height: 80,
    borderRadius: 30,
    backgroundColor: '#efa616',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#F2F3F5',
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center'
  }
})
