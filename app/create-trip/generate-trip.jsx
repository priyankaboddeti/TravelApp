import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Image } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AIprompt } from "../../constants/Options";
import { chatSession } from "../../configs/AIModel";
import { useRouter } from "expo-router";
import { auth, db } from "../../configs/FirebaseConfigs";
import { doc, setDoc } from "firebase/firestore";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const Final_prompt = AIprompt.replace(
      "{location}",
      tripData?.locationinfo?.name
    )
      .replace("{totalDays}", tripData?.totalNoOfDays)
      .replace("{totalNights}", tripData?.totalNoOfDays - 1)
      .replace("{traveller}", tripData?.traveller?.title)
      .replace("{budget}", tripData?.budget)
      .replace("{totalDays}", tripData?.totalNoOfDays)
      .replace("{totalNights}", tripData?.totalNoOfDays - 1);

    console.log(Final_prompt, "Final_prompt");
    const result = await chatSession.sendMessage(Final_prompt);
    console.log(result.response.text(), "response");
    const tripResponse = JSON.parse(result.response.text());
    setLoading(false);

    const docID = Date.now().toString();
    // console.log(db,docID,user.email,tripData,"docID");

    await setDoc(doc(db, "UserTrips", docID), {
      userEmail: user.email,
      tripPlan: tripResponse, // AI Result
      tripData: JSON.stringify(tripData), //user Selection Data
    });

    router.push("(tabs)/mytrip");
  };

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
        style={{
          fontFamily: "Montserrat-Bold",
          fontSize: 28,
          textAlign: "center",
        }}
      >
        Please Wait...{" "}
      </Text>

      <Text
        style={{
          fontFamily: "Montserrat-Medium",
          fontSize: 18,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        We are working to generate your dream trip{" "}
      </Text>
      <Image
        source={require("../../assets/images/plane.gif")}
        style={{
          height: 200,
          width: "100%",
          marginTop: 10,
          objectFit: "contain",
        }}
      ></Image>
      <Text
        style={{
          fontFamily: "Montserrat",
          color: Colors.GREY,
          fontSize: 18,
          textAlign: "center",
          paddingTop: 15,
        }}
      >
        Do not Go Back
      </Text>
    </View>
  );
}
