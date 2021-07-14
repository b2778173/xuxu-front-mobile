import { Text, View } from '../components/Themed'
import * as React from 'react'
import { StyleSheet, Button } from 'react-native'

function Test({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>test page</Text>
      <Button title="Go back home" onPress={() => navigation.goBack()} />
      <Button
        title="Go to not found"
        onPress={() => navigation.navigate('NotFound')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})

export default Test
