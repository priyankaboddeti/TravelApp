import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfigs";



export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    

    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);
    const onCreateNewAccount = () => {
        console.log("enter into function")
        if (!email && !password && !fullName) {
            ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM)
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              
                // Signed up 
                const user = userCredential.user;
                router.replace('/mytrip')
                console.log(user,"user")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
                // ..
            });
    }

    return (
        <View style={{ padding: 25, marginTop: 60, backgroundColor: Colors.WHITE, height: "100%" }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 25, marginTop: 30 }}>
                Create a New Account
            </Text>

            {/* User Full Name */}
            <View style={{ marginTop: 60 }}>
                <Text style={{ fontFamily: "Montserrat", paddingBottom: 5 }}>Full Name</Text>
                <TextInput style={styles.input} placeholder="Enter Email" onChangeText={(value) => setFullName(value)} />
            </View>
            {/* Email */}
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontFamily: "Montserrat", paddingBottom: 5 }}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter Email" onChangeText={(value) => setEmail(value)} />
            </View>

            {/* Password */}
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontFamily: "Montserrat", paddingBottom: 5 }}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    onChangeText={(value) => setPassword(value)}
                />
            </View>


            {/* Create Account Button */}
            <TouchableOpacity onPress={onCreateNewAccount}
                style={{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 20,
                    marginTop: 60,
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
            </TouchableOpacity>

            {/* Sign In Button */}
            <Pressable onPress={() => router.replace('auth/sign-in')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 20,
                    marginTop: 20
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
})
