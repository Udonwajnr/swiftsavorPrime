import React from 'react'
import { Text, View,Image } from 'react-native'

const RestaurantCard = () => {
  return (
    <View>
        <View className="relative ">
            <View className="absolute bottom-0 left-4 z-10">
                <Image source={require("../../assets/kfclogo.png")} className=" w-10 h-10"/>
            </View>
             <Image source={require("../../assets/kfc.jpg")} className="w-full"/>
        </View>
        <View>
            <Text className="text-white text-xl font-bold">kentucky fried chicken</Text>
            <View>
                <Text>burger,Chiken,</Text>
            </View>
        </View>
    </View>
  )
}

export default RestaurantCard