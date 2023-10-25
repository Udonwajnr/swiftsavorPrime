import React from 'react'
import { Text,View,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';

const Cart = () => {
    const navigation = useNavigation()
  return (
    <View className="absolute bottom-0 shadow-lg bg-white w-full flex-row p-4 justify-between">
        <View className="flex-row items-center space-x-2">
            <FontAwesome name="shopping-basket" size={24} color="#C00100" />
            <Text className="text-gray-400 font-bold">
                0 Item added
            </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
            <Text className="font-bold text-white bg-light-red rounded-lg px-4 py-2">Proceed to Cart</Text>
        </TouchableOpacity>
</View>
  )
}

export default Cart