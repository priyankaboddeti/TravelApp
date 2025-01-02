import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "@/constants/Colors";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

export default function UserTripsList({ userTrips }) {
  const LatestTrip = JSON.parse(userTrips[0].tripData);
  const router = useRouter();
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {LatestTrip?.locationinfo?.photoRef ? (
          <Image
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                LatestTrip?.locationinfo?.photoRef +
                "&key=" +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
            style={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              borderRadius: 15,
            }}
          ></Image>
        ) : (
          <Image
            source={require("./../../assets/images/travel-concept.jpg")}
            style={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        )}

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 18 }}>
            {userTrips[0]?.tripPlan?.tripName}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat",
                fontSize: 16,
                color: Colors.GREY,
              }}
            >
              {moment(LatestTrip.startDate).format("DD MMM yyyy")}
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat",
                fontSize: 16,
                color: Colors.GREY,
              }}
            >
              🚌 {LatestTrip.traveller.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: {
                  trip: JSON.stringify(userTrips[0]),
                },
              })
            }
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: "center",
                fontFamily: "Montserrat-Medium",
              }}
            >
              {" "}
              See you Plan
            </Text>
          </TouchableOpacity>
        </View>

        {userTrips.map((trip, index) => (
          <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  );
}
