import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'


export default function OptionCard({ option, selectedOption }) {
  return (
    <View style={[{ padding: 20, display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: Colors.Light_GREY, borderRadius: 15 }, selectedOption?.id == option?.id && { borderWidth: 2 }]}>
      <View>
        <Text style={{ fontSize: 20, fontFamily: "Montserrat-bold" }}>{option?.title}</Text>
        <Text style={{ fontSize: 17, fontFamily: "Montserrat", color: Colors.GREY,marginTop:5 }}>{option?.desc}</Text>
      </View>
      <Text style={{ fontSize: 45 }}>{option?.icon}</Text>
    </View>
  )
}