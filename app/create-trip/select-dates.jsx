import { View, Text, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from "react-native";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectDates() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const navigation = useNavigation();
  const router = useRouter();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type == "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const OnDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show(
        "Please select StartDate and EndDate",
        ToastAndroid.LONG
      );
      return;
    }
    const totalNoOfDays = endDate.diff(startDate, "days");
    console.log(totalNoOfDays + 1);
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });
    router.push("/create-trip/select-budget");
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 100,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      <Text
        style={{ fontFamily: "Montserrat-Bold", fontSize: 30, marginTop: 20 }}
      >
        Travel Dates
      </Text>
      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={10}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 35,
        }}
      >
        <Text
          style={{ fontSize: 20, textAlign: "center", color: Colors.WHITE }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
