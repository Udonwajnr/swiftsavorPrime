// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StatusBar,ScrollView,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Banner from '../components/Banner'
import Search from '../components/Search'
import RestaurantsLocation from '../components/RestaurantsLocation'

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-dark-black px-2">
      <StatusBar  animated={true}/>
          <ScrollView>
            <View className="my-3">
              <Text className="text-white">Delivering To</Text>
              <Text className="text-white font-bold">Umoh Udonwa</Text>
            </View>
          {/* Search */}
            <Search/>
        {/* banner */}
        <Banner/>
        {/* restaurant based on location */}
         <Text className="text-white text-xl font-bold">Restaurant In your Location</Text>
          <RestaurantsLocation/>
          </ScrollView>
    </SafeAreaView>
  )
}
// bg-[#121212]
// #282828
export default HomeScreen