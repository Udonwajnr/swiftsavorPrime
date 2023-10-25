import React from 'react'
import { Text ,ScrollView,TouchableOpacity, View} from 'react-native'

const FilterDish = () => {
  return (
    <View className="">
    <ScrollView
        horizontal={true}
        className="flex gap-x-1.5 py-3"
        >
            <TouchableOpacity className="border border-light-red rounded-2xl px-3 py-1" onPress={()=>setFilter("All")}>
                <Text className="text-black text-center" >All</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-light-red rounded-2xl px-3 py-1" onPress={()=>setFilter("Rice")}>
                <Text className="text-black text-center">Rice</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-light-red rounded-2xl px-3 py-1" onPress={()=>setFilter("Pizza")}>
                <Text className="text-black">Pizza</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="border border-light-red rounded-2xl px-3 py-1" onPress={()=>setFilter("Noodles")}>
                <Text className="text-black">Noodles</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-light-red rounded-2xl px-3 py-1" onPress={()=>setFilter("Burger")}>
                <Text className="text-black">Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-light-red rounded-2xl px-3 py-1" onPress={()=>setFilter("Bread")}>
                <Text className="text-black">Bread</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-light-red rounded-2xl px-3 py-1" onPress={()=>setFilter("Salad")}>
                <Text className="text-black">Salad</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-light-red rounded-2xl px-3 py-1" onPress={()=>setFilter("Drinks")}>
                <Text className="text-black">Drinks</Text>
            </TouchableOpacity> 
        </ScrollView>

    </View>
  )
}

export default FilterDish