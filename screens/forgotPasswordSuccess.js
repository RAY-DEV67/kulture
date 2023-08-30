import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  PixelRatio,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";
import { useState, useContext } from "react";
// import { SetUserId, SetUserLogged, UserId, UserLogged } from "../../App";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

// // Define a function to load the custom fonts
// async function loadFonts() {
//   await Font.loadAsync({
//     Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
//     MontserratSemiBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
//   });
// }

// // Call the function to load the fonts
// loadFonts();

const BASE_URL = "http://54.210.116.44/api/v1";

export default function ForgotPasswordSuccess({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  const [loading, setloading] = useState(false);

  return (
    <View className="pt-[32px] px-[16px] bg-[#1c1c1c] h-[100vh]">
      <Image
        source={require("../assets/logo.png")}
        className="w-[30vw] h-[10vw] mt-[16px] rounded-full object-contain"
      />
      <Text
        style={{ fontSize: getFontSize(18) }}
        className="text-white font-semibold my-[16px]"
      >
        Email has been sent!
      </Text>
      <Text className="text-white">
        Please check your inbox and click on the received link to reset
        password.
      </Text>

      <Image
        source={require("../assets/fp2.png")}
        className="mt-[16px] object-contain"
      />

      <TouchableOpacity
        className="bg-[#6600e8] py-[16px] rounded-[10px] mt-[32px]"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text className="text-center text-white">Log In</Text>
        <Spinner
          visible={loading}
          textContent={"Loading..."}
          textStyle={{ color: "#FFF" }}
        />
      </TouchableOpacity>

      <Text className="text-center mt-[16px] text-white">
        Didn't receive any link?
        <TouchableOpacity className="text-[#6600e8]">
          <Text className="text-[#6600e8]"> Resend</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
