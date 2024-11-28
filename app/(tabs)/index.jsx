import { View, Text  , StyleSheet , ImageBackground} from 'react-native'
import React from 'react'
import coffee from '@/assets/images/icoffee.png'


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={coffee}
      resizeMode='cover'
      style={styles.image}
      >
      <Text style={styles.text}>coffee shop </Text>
      </ImageBackground>
        
    </View>
  )
}

export default app
const styles  = StyleSheet.create({
  container:{
    flex:1 ,
    flexDirection:'column',
  },
  text :{
    color:'white',
    fontSize:42 ,
    fontWeight: 'bold',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
    
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:"center",
   


  }
    
})