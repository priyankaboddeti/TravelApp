import { View, Text, TextInputBase, TextInput, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";


export default function Index() {
    const router = useRouter();
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View
            style={{
                padding: 20,
                marginTop: 60,
                backgroundColor: Colors.WHITE,
                height: "100%",
            }}
        >
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 25, fontFamily: "Montserrat-Bold", marginTop: 30 }}>
                Let's Sign You In
            </Text>
            <Text
                style={{
                    fontSize: 25,
                    fontFamily: "Montserrat",
                    color: Colors.GREY,
                    marginTop: 20,
                }}
            >
                Welcome Back
            </Text>
            <Text
                style={{
                    fontSize: 25,
                    fontFamily: "Montserrat",
                    color: Colors.GREY,
                    marginTop: 10,
                }}
            >
                You've been missed!
            </Text>

            {/* Email */}
            <View style={{ marginTop: 60 }}>
                <Text style={{ fontFamily: "Montserrat", paddingBottom: 5 }}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter Email" />
            </View>

            {/* Password */}
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontFamily: "Montserrat", paddingBottom: 5 }}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                />
            </View>

            {/* Sign In Button */}
            <Pressable
                style={{
                    padding: 20,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 20,
                    marginTop: 60
                }}
            >
                <Text
                    style={{
                        fontFamily: "Montserrat",
                        fontSize: 20,
                        textAlign: "center",
                        color: Colors.WHITE,
                    }}
                >
                    Sign In
                </Text>
            </Pressable>

            {/* Create Account Button */}
            <Pressable onPress={() => router.replace('auth/sign-up')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 20,
                    marginTop: 20,
                    borderWidth: 1
                }}
            >
                <Text
                    style={{
                        fontFamily: "Montserrat",
                        fontSize: 20,
                        textAlign: "center",
                        color: Colors.PRIMARY,
                    }}
                >
                    Create Account
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.GREY,
        fontFamily: "Montserrat",
    },
});
