import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Block = ({title, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        {children}
      </View>
    </View>
  )
}

export default Block

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignContent:'center',
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        textShadowOffset: { width: 50, height: 5},
        elevation: 5,
        margin:10
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'red'
      },

})