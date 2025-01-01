import { View, Text, Platform, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/configs/FirebaseConfigs";
import UserTripsList from "../../components/MyTrips/UserTripsList";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;

  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc, doc.id, " => ", doc.data());
      setUserTrips((prev) => [...prev, doc.data()]);
    });
    setLoading(false);
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: Platform.OS == "ios" ? 70 : 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 40 }}>
          My Trips
        </Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {loading && (
        <ActivityIndicator
          size={"large"}
          color={Colors.PRIMARY}
        ></ActivityIndicator>
      )}
      {userTrips?.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripsList userTrips={userTrips} />
      )}
    </View>
  );
}
