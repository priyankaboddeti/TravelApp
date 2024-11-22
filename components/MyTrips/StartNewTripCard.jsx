import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'



export default function StartNewTripCard() {
    const router=useRouter()
    return (
        <View style={{ pading: 20, marginTop: 60, display: "flex", alignItems: "center", gap: 30 }}>
            <Ionicons name="location-sharp" size={30} color="black" />
            <Text style={{ fontSize: 25, fontFamily: "Montserrat-Bold" }}>No Trips Planned Yet</Text>
            <Text style={{
                fontSize: 20, fontFamily: "Montserrat", textAlign: "center", color: Colors.GREY

            }}>No Trips Planned Yet</Text>
            <TouchableOpacity onPress={()=>router.push('/create-trip/search-place')} style={{ padding: 15, backgroundColor: Colors.PRIMARY, borderRadius: 15, paddingHorizontal: 30 }}>
                <Text style={{color:Colors.WHITE,fontFamily:"Montserrat-SemiBold",fontSize:17}}>Start New Trip</Text>
            </TouchableOpacity>
        </View>
    )
}