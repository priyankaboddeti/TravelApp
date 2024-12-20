import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "@/constants/Colors";


export default function UserTripsList({ userTrips }) {
  const LatestTrip = JSON.parse(userTrips[0].tripData);
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Image
          source={require("./../../assets/images/travel-concept.jpg")}
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            borderRadius: 15,
          }}
        />
        <View style={{ marginTop: 15 }}>
         
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 18 }}>
              {userTrips[0]?.tripPlan?.tripName}
            </Text>
            <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop:10
            }}
          >
            <Text style={{ fontFamily: "Montserrat", fontSize: 16,color:Colors.GREY }}>
              {moment(LatestTrip.startDate).format("DD MMM yyyy")}
            </Text>
            <Text style={{ fontFamily: "Montserrat", fontSize: 16,color:Colors.GREY }}>
              🚌{LatestTrip.traveller.title}
            </Text>
          </View>
          <TouchableOpacity style={{color:Colors.PRIMARY,padding:15,borderRadius:15}}>
            See you Plan
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
