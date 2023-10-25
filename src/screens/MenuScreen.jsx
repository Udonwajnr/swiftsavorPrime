import React from 'react'
import {Text,View, Image, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopComponents from '../components/TopComponents'
import RestaurantReview from '../components/RestaurantReview'
import RestaurantDetails from '../components/RestaurantDetails'
import RestaurantMenu from '../components/RestaurantMenu'
const MenuScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="relative">
          <TopComponents/>
          <View className="bg-dark-opacity absolute z-20 w-full h-full">
          </View>
          <Image source={require("../../assets/kfctable.jpg")} className="h-60 w-full object-contain"/>
        </View>
        {/*  */}
        <RestaurantDetails/>
        <RestaurantMenu/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MenuScreen