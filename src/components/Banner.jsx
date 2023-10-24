import React from 'react'
import { Text, TouchableOpacity,Image,View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
const Banner = () => {
  return (
    <View className="flex-row w-full mt-8 bg-light-black p-2">
        <View className="text-white w-8/12">
            <Text className="text-white text-xl font-bold">Unlimited Free Delivery</Text>
            <Text className="text-white mt-3 text-xs">Enjoy with unlimited fred delivery and free meals when you upgrade to pro</Text>
            <View className="flex-row mt-3">
                <TouchableOpacity className="flex-row justify-center items-center bg-light-red rounded-xl p-2 space-x-2">
                    <Text className="text-white">Upgrade Now</Text>
                    <AntDesign name="arrowright" size={16} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        <View className="justify-center items-center flex-row  w-4/12">
            <Image source={require("../../assets/delivery.png")}/>
        </View>
    </View>
  )
}

export default Banner