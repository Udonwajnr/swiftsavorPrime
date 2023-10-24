import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Text,TextInput, View } from 'react-native'
const Search = () => {
  return (
    <View className="flex-row justify-center items-center w-full relative bg-light-black py-2 px-2 rounded-3xl mt-2">
        <View className="rounded-l-3xl h-full flex-row items-center justify-center ">
            <AntDesign name="search1" size={20} color="white" />
        </View>
        <View className="w-11/12 h-full rounded-r-3xl">
            <TextInput className="rounded-r-3xl px-2 text-white" placeholder='Category,Restaurant,Meals' placeholderTextColor={'#978583'}/>
        </View>
    </View>
  )
}

export default Search