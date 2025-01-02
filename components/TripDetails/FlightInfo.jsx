import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function FlightInfo({ flightData }) {
  console.log(flightData, "flightData");
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 20 }}>
        ✈️ Flights
      </Text>
      <Text style={{ fontFamily: "Montserrat", fontSize: 15 }}>
        Airline: {flightData?.airline}
      </Text>
      <Text style={{ fontFamily: "Montserrat", fontSize: 15 }}>
        Price: {flightData?.price}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 7,
          width: 100,
          borderRadius: 7,
          marginTop: 7,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "Montserrat-Bold",
            fontSize: 13,
            textAlign: "center",
          }}
        >
          Book Here
        </Text>
      </TouchableOpacity>
    </View>
  );
}
