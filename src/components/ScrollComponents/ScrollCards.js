import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native'

import Cardx001 from '../Cards/Card-x001'
import Cardx002 from '../Cards/Card-x002'
import Cardx003 from '../Cards/Card-x003'
import Cardx004 from '../Cards/Card-x004'
import Cardx005 from '../Cards/Card-x005'
import Cardx006 from '../Cards/Card-x006'
import Cardx007 from '../Cards/Card-x007'
import Cardx008 from '../Cards/Card-x008'
import Cardx009 from '../Cards/Card-x009'
import Cardx0010 from '../Cards/Card-x0010'

export default function ShowScrollCards() {

  return (
    <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <View style={styles.containerCards}>
        <Cardx001 />
        <Cardx002 />
        <Cardx003 />
        <Cardx004 />
        <Cardx005 />
        <Cardx006 />
        <Cardx007 />
        <Cardx008 />
        <Cardx009 />
        <Cardx0010 />
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003b71'
  },
  containerCards: {
    justifyContent: 'space-around'
  }
})
