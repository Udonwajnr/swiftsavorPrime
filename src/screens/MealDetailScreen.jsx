import React from 'react'
import { Text,View,Image,ScrollView,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const MealDetailScreen = () => {
  return (
    <ScrollView>
        <View className="h-80 relative w-full">
            <Image source={require("../../assets/burger.jpg")} className="w-full h-full"/>
        </View>
      
        <View>
            <Text className="text-2xl text-black">Kentucky Fried Chicken</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corporis rem sit distinctio! Quidem error reiciendis aliquam earum, dicta voluptate magnam illo quasi voluptatum eaque eligendi esse? Obcaecati, iure excepturi.</Text>
        </View>

        <View>
            <View className="flex-row justify-between items-center bg-[#e7eaef] p-2">
                <TouchableOpacity className=" rounded-full mr-4" >
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
                    <Text className="text-black text-center text-xl font-bold">1</Text>
                <TouchableOpacity className="rounded-full ml-4">
                    <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default MealDetailScreen