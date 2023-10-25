import React from 'react'
import {Text, View,TextInput} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import DishCard from './DishCard'
import FilterDish from './FilterDish';

const RestaurantMenu = () => {
  return (
        <View className="relative px-3 bottom-9 ">
            <Text className="text-black font-bold text-xl">Menu</Text>
            <View className="flex-row justify-center items-center w-full relative bg-light-black py-2 px-2 rounded-3xl mt-2">
                <View className="rounded-l-3xl h-full flex-row items-center justify-center ">
                    <AntDesign name="search1" size={20} color="white" />
                </View>

                <View className="w-11/12 h-full rounded-r-3xl">
                    <TextInput className="rounded-r-3xl px-2 text-white" placeholder='Search Meal' placeholderTextColor={'#978583'}/>
                </View>
            </View>
                <FilterDish/>
    
            <DishCard/>
            <DishCard/>
            <DishCard/>
            <DishCard/>
            <DishCard/>
        </View>
  )
}

export default RestaurantMenu