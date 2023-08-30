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

export default function ForgotPassword({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  const [loading, setloading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Assuming you have a function to handle the completion of onboarding
  const handleOnboardingComplete = async () => {
    try {
      // Set onboarded as true in AsyncStorage
      await AsyncStorage.setItem("onboarded", "true");
    } catch (error) {
      console.error("Error setting onboarded status:", error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setloading(true);
    try {
      // Make API call to log in with email and password
      const response = await axios.post(`${BASE_URL}/login`, values);

      // Handle success response
      setUserId(true);
      Alert.alert("Success", "Log In Successful");
      console.log(response.data.data);
      handleOnboardingComplete();
      navigation.navigate("AfterHome");
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify(response.data.data.userId)
      );
      await AsyncStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.token)
      );
    } catch (error) {
      // Handle error response
      console.log(error.response.data);
      Alert.alert("Error", error.response.data.message);
    }
    setloading(false);
    setSubmitting(false);
  };

  const SignUpHandler = () => {
    navigation.navigate("Create An Account");
  };
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
        Forgot your Password?
      </Text>
      <Text className="text-white">
        Enter your registered mail below to receive password reset information.
      </Text>

      <Image
        source={require("../assets/fp1.png")}
        className="my-[16px] object-contain"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Text className="text-white">Email</Text>

            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              className="border border-white my-[12px] py-[8px] rounded-[8px]"
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}

            <Text className="text-center mt-[16px] text-white">
              Remember Password?
              <TouchableOpacity
                className="text-[#6600e8]"
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text className="text-[#6600e8]"> Log in</Text>
              </TouchableOpacity>
            </Text>

            <TouchableOpacity
              className="bg-[#6600e8] py-[16px] rounded-[10px] mt-[32px]"
              onPress={() => {
                navigation.navigate("ForgotPasswordSuccess");
              }}
            >
              <Text className="text-center text-white">Send</Text>
              <Spinner
                visible={loading}
                textContent={"Loading..."}
                textStyle={{ color: "#FFF" }}
              />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
