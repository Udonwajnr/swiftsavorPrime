import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import RestaurantReview from './RestaurantReview';

const RestaurantDetails = () => {
  return (
    <View className="relative bottom-14 w-11/12 pb-3  m-auto bg-white z-40 rounded-2xl">
        <RestaurantReview/>
        <View className="bg-white px-2  relative ">
            <Text className="font-bold text-base capitalize">Kentucky Fried Chicken</Text>
            <Text className="text-xs capitalize">ChiKen,Burger,Rice,Meat,Sald</Text>
            <View className="border border-gray-200 my-2"/>
            
            <View className="flex-row items-center">
                <Ionicons name="location-sharp" size={18} color="#C00100" />
                <Text className="text-xs">502 Preston Rd. inglewood, maine 98380</Text>
            </View>

            <View className="flex-row  items-center mt-1">
            <MaterialCommunityIcons name="clock-time-four" size={18} color="#C00100" />
                <Text className="text-xs">15min &#8226; 1.5 &#8226; Paid Delivery </Text>
            </View>

        </View>
    </View>
  )
}

export default RestaurantDetails