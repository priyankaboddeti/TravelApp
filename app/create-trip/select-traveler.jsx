import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";

import OptionCard from "../../components/CreateTrip/OptionCard";
import { SelectTravellerList } from "../../constants/Options";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Colors } from "@/constants/Colors";

export default function SelectTraveler() {
  const [selectTreaveller, setSelectedTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, traveller: selectTreaveller });
  }, [selectTreaveller]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 100,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text
        style={{ fontSize: 35, fontFamily: "Montserrat-Bold", marginTop: 20 }}
      >
        Who's Travelling
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 20 }}>
          Choose your traveles
        </Text>
        <FlatList
          data={SelectTravellerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ flex: 1, marginVertical: 10, justifyContent: "center" }}
              onPress={() => setSelectedTraveller(item)}
            >
              <OptionCard option={item} selectedOption={selectTreaveller} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Link
          href={"/create-trip/select-dates"}
          style={{ width: "100%", textAlign: "center" }}
        >
          <Text
            style={{ fontSize: 20, textAlign: "center", color: Colors.WHITE }}
          >
            Continue
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
