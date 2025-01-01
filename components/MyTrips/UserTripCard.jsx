import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "@/constants/Colors";

export default function UserTripCard({ trip }) {
  const FormatData = (data) => {
    return JSON.parse(data);
  };
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      {/* <Image
        source={require("./../../assets/images/travel-concept.jpg")}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      /> */}
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            FormatData(trip.tripData)?.locationinfo?.photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      ></Image>
      <View>
        <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 16 }}>
          {trip.tripPlan?.tripName}
        </Text>
        <Text
          style={{ fontFamily: "Montserrat", fontSize: 14, color: Colors.GREY }}
        >
          {moment(FormatData(trip.tripData).startDate).format("DD MMM yyyy")}
        </Text>
        <Text
          style={{ fontFamily: "Montserrat", fontSize: 14, color: Colors.GREY }}
        >
          Travelling: {FormatData(trip.tripData).traveller.title}
        </Text>
      </View>
    </View>
  );
}
