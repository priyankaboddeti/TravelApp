import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);

  const FormatData = (data) => {
    if (typeof data === "string") {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error("Error parsing data in FormatData:", error);
        return null; // Handle parsing error
      }
    }
    return data; // Return as is if it's already an object
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    try {
      const parsedTrip = JSON.parse(trip);
      setTripDetails(parsedTrip);
      console.log(parsedTrip.tripData);
    } catch (error) {
      console.error("Error parsing trip:", error);
      setTripDetails(null);
    }
  }, []);

  return (
    tripDetails && (
      <View>
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              FormatData(tripDetails.tripData)?.locationinfo?.photoRef +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{ width: "100%", height: 300 }}
        ></Image>
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text style={{ fontSize: 25, fontFamily: "Montserrat-Bold" }}>
            {tripDetails?.tripPlan?.tripName}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat",
                fontSize: 16,
                color: Colors.GREY,
              }}
            >
              {moment(FormatData(tripDetails?.tripData)?.startDate).format(
                "DD MMM yyyy"
              )}
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat",
                fontSize: 16,
                color: Colors.GREY,
              }}
            >
              -{"  "}
              {moment(FormatData(tripDetails?.tripData)?.endDate).format(
                "DD MMM yyyy"
              )}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Montserrat",
              fontSize: 16,
              color: Colors.GREY,
            }}
          >
            🚌 {FormatData(tripDetails?.tripData)?.traveller.title}
          </Text>
          {/* Flight Details */}
          <FlightInfo flightData={tripDetails?.tripPlan?.flights.outbound} />
          {/* Hotels List */}

          {/* Trip day Planner Info */}
        </View>
      </View>
    )
  );
}
