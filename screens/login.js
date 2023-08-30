import React from "react";
import {
  Text,
  View,
  TextInput,
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
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://kulture-api.onrender.com/api/v1";

export default function Login({ navigation }) {
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
      const response = await axios.post(`${BASE_URL}/signin`, values);

      // Handle success response
      // setUserId(true);
      Alert.alert("Success", "Log In Successful");
      console.log(response.data.data);
      handleOnboardingComplete();
      navigation.navigate("Home");
      setloading(false);
      // await AsyncStorage.setItem(
      //   "userData",
      //   JSON.stringify(response.data.data.userId)
      // );
      // await AsyncStorage.setItem(
      //   "accessToken",
      //   JSON.stringify(response.data.token)
      // );
    } catch (error) {
      // Handle error response
      console.log(error.response.data);
      Alert.alert("Error", error.response.data.message);
    }
    setloading(false);
    setSubmitting(false);
  };

  return (
    <View className="pt-[32px] px-[16px] bg-[#1c1c1c] h-[100vh]">
      <Image
        source={require("../assets/logo.png")}
        className="w-[30vw] h-[10vw] mt-[16px] rounded-full object-contain"
      />
      <View className="flex-row justify-between items-center my-[16px]">
        <Text
          style={{ fontSize: getFontSize(18) }}
          className="text-white font-semibold"
        >
          Welcome Back
        </Text>
        <Image
          source={require("../assets/noProfile.jpg")}
          className="w-[10vw] h-[10vw] rounded-full object-contain"
        />
      </View>
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
              className="border border-white my-[12px] text-white p-[8px] rounded-[8px]"
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}

            <Text className="text-white">Password</Text>
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              className="border border-white my-[12px] text-white p-[8px] rounded-[8px]"
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text>{errors.password}</Text>
            )}
            <TouchableOpacity
              className="bg-[#6600e8] py-[16px] rounded-[10px] mt-[32px]"
              onPress={handleSubmit}
            >
              <Text className="text-center text-white">Log In</Text>
              <Spinner
                visible={loading}
                textContent={"Loading..."}
                textStyle={{ color: "#FFF" }}
              />
            </TouchableOpacity>

            <Text className="text-center mt-[16px] text-white">
              Dont have an account?{" "}
              <TouchableOpacity
                className="text-[#6600e8]"
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text className="text-[#6600e8]"> Sign Up</Text>
              </TouchableOpacity>
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
              className="mt-[16px]"
            >
              <Text className="text-center text-white">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
