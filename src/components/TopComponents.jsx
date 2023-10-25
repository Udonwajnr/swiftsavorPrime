import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
const TopComponents = () => {
  const navigation = useNavigation()
   
  return (
    <View className="absolute top-8 justify-between z-40 flex-row w-full  px-3 ">
        <TouchableOpacity className="bg-white p-2 flex justify-center items-center rounded-full" onPress={()=>navigation.goBack()}>
            <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-row space-x-3">
            <TouchableOpacity className="bg-white p-2 flex justify-center items-center rounded-full">
                 <Entypo name="share" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-2 flex justify-center items-center rounded-full">
                 <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default TopComponents