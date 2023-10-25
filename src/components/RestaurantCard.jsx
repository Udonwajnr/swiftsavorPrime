import React from 'react'
import { Text, View,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = () => {
    const navigation = useNavigation()
    return (
    <>
    <TouchableOpacity onPress={()=>navigation.navigate("RestaurantMenu")}>
        <View>
            <View className="relative h-48">
                <View className="absolute bottom-0 right-4 z-10">
                    <Image source={require("../../assets/kfclogo.png")} className=" w-10 h-10"/>
                </View>
                <Image source={require("../../assets/kfc.jpg")} className="w-full h-48"/>
            </View>
            <View>
                <Text className="text-white text-xl font-bold capitalize">kentucky fried chicken</Text>
                <View className="mt-1 flex-row justify-between">
                    <Text className="text-white">burger,Chicken,</Text>
                    <View className="flex-row items-center gap-x-1">
                        <Image source={require("../../assets/star.png")} className="w-5 h-5"/>
                        <Text className="text-[#caccd1] flex items-center">3.5</Text>
                        <Text className="text-[#caccd1]">(512 Reviews)</Text>
                    </View>
                </View>
                <Text className="text-[#caccd1] font-bold">Uyo</Text>   
            </View>
        </View>  
    </TouchableOpacity>

    <TouchableOpacity>
        <View className="mt-5">
            <View className="relative h-48">
                <View className="absolute bottom-0 right-4 z-10">
                    <Image source={require("../../assets/dominos-logo.png")} className=" w-10 h-10"/>
                </View>
                <Image source={require("../../assets/domin.jpg")} className="w-full h-48"/>
            </View>
            <View>
                <Text className="text-white text-xl font-bold capitalize">dominos pizza</Text>
                <View className="mt-1 flex-row justify-between">
                    <Text className="text-white">burger,Chicken,</Text>
                    <View className="flex-row items-center gap-x-1">
                        <Image source={require("../../assets/star.png")} className="w-5 h-5"/>
                        <Text className="text-[#caccd1] flex items-center">3.5</Text>
                        <Text className="text-[#caccd1]">(512 Reviews)</Text>
                    </View>
                </View>
                <Text className="text-[#caccd1] font-bold">Uyo</Text>   
            </View>
        </View>  
    </TouchableOpacity>
    </>
  )
}

export default RestaurantCard