import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import {NavigationContainer} from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import ExploreScreen from "./screens/ExploreScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MenuScreen from "./screens/MenuScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:"#C00100",
                tabBarInactiveTintColor:"#978583",
                tabBarStyle:{
                    backgroundColor:"#121212"
                },
                headerStyle:{
                    backgroundColor:"white", 
                },
                headerTitleStyle:{
                    fontWeight:"bold",
                    fontSize:25,
                    color:'black', 
                    textAlign:"center",
                },
                headerTitleAlign:"center"
                }}
            >
                <Tab.Screen name="Home"
                 component={HomeScreen}
                 options={{
                    tabBarIcon:({focused})=>(<AntDesign name="home" size={24} color={focused?"#C00100":"#978583"} />),
                    headerShown:false,
                  }}
                 />
                 <Tab.Screen name="Explore"
                 component={ExploreScreen}
                 options={{
                    tabBarIcon:({focused})=>(<Feather name="search" size={24} color={focused?"#C00100":"#978583"} />),
                    headerShown:false,
                  }}
                 />

                 <Tab.Screen name="RestaurantMenu"
                 component={MenuScreen}
                 options={{
                    tabBarIcon:({focused})=>(<Feather name="search" size={24} color={focused?"#C00100":"#978583"} />),
                    headerShown:false,
                    tabBarButton: () => null,
                    tabBarStyle: { display: "none" },
                  }}
                 />

                 <Tab.Screen name="Cart"
                 component={CartScreen}
                 options={{
                    tabBarIcon:({focused})=>(<FontAwesome name="shopping-basket" size={24} color={focused?"#C00100":"#978583"} />),
                    headerShown:false,
                    // tabBarButton:''

                }}
                 />
                 <Tab.Screen name="MealDetail"
                 component={MealDetailScreen}
                 options={{
                    tabBarIcon:({focused})=>(<FontAwesome name="shopping-basket" size={24} color={focused?"#C00100":"#978583"} />),
                    headerShown:false,
                    tabBarButton: () => null,
                    tabBarStyle: { display: "none" },

                }}
                 />
                <Tab.Screen name="Profile" component={ProfileScreen}  options={{
                    tabBarIcon:({focused})=>(<Feather name="user" size={24} color={focused?"#C00100":"#978583"} />),
                    headerShown:false,
                  }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}