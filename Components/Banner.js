import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = (uri_img,title) => {
  return (
    <View style={styles.khung}>
      <Image source={require('../Image/logo.png')}style={styles.anh}/>
       
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
anh:{
    width:'100%',
    height:100,
    padding:4,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'red',
    resizeMode:'center'
},
khung:{
    backgroundColor:'white',
   
    margin:10,
    padding:7,alignItems:'flex-start'
    
},
txt:{
    color:'red',
    fontSize:25,
    
}

})