import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useRouteNode } from "expo-router/build/Route";
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/world.png")}
        style={{ width: "100%", height: 500 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 30,
            fontFamily: "Montserrat-Bold",
            textAlign: "center",
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            marginTop: 30,
            fontSize: 17,
            fontFamily: "Montserrat",
            textAlign: "center",
            color: Colors.GREY,
          }}
        >
          Discover seamless travel. Our AI planner crafts personalized
          itineraries, tailored to your preferences for an effortless journey.
        </Text>
        <Pressable
          onPress={() => router.push("auth/sign-in")}
          style={styles.button}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "Montserrat-SemiBold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            {" "}
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button: {
    marginTop: "25%",
    padding: 15,
    borderRadius: 99,
    backgroundColor: Colors.PRIMARY,
  },
});
