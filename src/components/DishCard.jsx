import React from 'react'
import { View,Image,Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const DishCard = () => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('MealDetail')}>
        <View className=" h-44 flex-row items-center shadow-md bg-white rounded-3xl my-2">
            <View className="w-6/12 px-1">
                <Text className="font-bold">Aloo Party SandWich</Text>
                <View className="flex-row items-center space-x-1 my-3">
                    <Entypo name="star" size={16} color="#C00100" />
                    <Text className="font-bold">4.8 (1k + Review)</Text>
                </View>
                <Text className="font-bold">$15.00</Text>    
            </View>

            <View className="w-6/12 rounded-3xl">
                <Image source={require("../../assets/burger.jpg")} className="w-full rounded-3xl h-5/6"/>
                <TouchableOpacity className="w-16 p-0.5 bg-light-red relative m-auto bottom-3 rounded-xl">
                    <Text className="text-white  text-center">ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default DishCard