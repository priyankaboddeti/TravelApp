import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";
import { TouchableOpacity } from "react-native";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{ fontFamily: "Montserrat-Bold", fontSize: 25, marginTop: 25 }}
      >
        Review your trip
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 18 }}>
          Before generating your trip, Please review your selection
        </Text>
        {/* Destination Info */}
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>📍</Text>

          <View>
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 15,
                color: Colors.GREY,
              }}
            >
              Destination
            </Text>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 15 }}>
              {tripData?.locationinfo?.name}
            </Text>
          </View>
        </View>

        {/* Date Selected Info */}
        <View
          style={{
            marginTop: 35,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>🗓️</Text>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 15,
                color: Colors.GREY,
              }}
            >
              Travel Date
            </Text>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 15 }}>
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData?.endDate).format("DD MMM") +
                " "}
              ({tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>

        {/* No of Travellers Info */}
        <View
          style={{
            marginTop: 35,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>🚌</Text>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 15,
                color: Colors.GREY,
              }}
            >
              Who is travelling
            </Text>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 15 }}>
              {tripData?.traveller?.title}
            </Text>
          </View>
        </View>

        {/* Budget Info */}
        <View
          style={{
            marginTop: 35,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>💰</Text>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 15,
                color: Colors.GREY,
              }}
            >
              Budget
            </Text>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 15 }}>
              {tripData?.budget}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 60,
          }}
          onPress={() => router.push("create-trip/generate-trip")}
        >
          <Text
            style={{ fontSize: 20, textAlign: "center", color: Colors.WHITE }}
          >
            Build My Trip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
