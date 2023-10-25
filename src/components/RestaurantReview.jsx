import React from 'react'
import { Text, View,Image } from 'react-native'
const RestaurantReview = () => {
  return (
    <View className=" bg-light-red  justify-center items-center relative w-6/12 m-auto bottom-5 px-3 py-2 rounded-2xl"> 
      {/* <Image source={require("../../assets/star.png")}/> */}
      <Text className="text-white">4.9(1k + Review)</Text>
    </View>
  )
}

export default RestaurantReview