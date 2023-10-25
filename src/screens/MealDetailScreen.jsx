import React from 'react'
import { Text,View,Image,ScrollView,TouchableOpacity, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import Cart from '../components/Cart';
const MealDetailScreen = () => {
  return (
    <SafeAreaView className="flex-1">
        <ScrollView className="">
                <View className="h-80 relative w-full">
                    <Image source={require("../../assets/burger.jpg")} className="w-full h-full"/>
                </View>
            
                <View className="px-2">
                    <Text className="text-2xl text-black">Kentucky Fried Chicken</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corporis rem sit distinctio! Quidem error reiciendis aliquam earum, dicta voluptate magnam illo quasi voluptatum eaque eligendi esse? Obcaecati, iure excepturi.</Text>
                </View>

                <View className="flex-row justify-between mt-3 px-2">
                    <View className="flex-row justify-between items-center border border-light-red rounded-3xl p-2">
                        <TouchableOpacity className="rounded-full mr-4">
                            <AntDesign name="minus" size={20} color="black" />
                        </TouchableOpacity>
                            <Text className="text-black text-center text-base font-bold">1</Text>
                        <TouchableOpacity className=" rounded-full ml-4" >
                            <AntDesign name="plus" size={20} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity className="bg-light-red flex-row items-center justify-between  px-2 py-2 rounded-lg" >
                                <Text className="text-white mr-5 font-bold" >Add to Cart</Text>
                                <Text className="text-white font-bold">&#8358;0</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        </ScrollView>
                <Cart/>
    </SafeAreaView>
  )
}

export default MealDetailScreen