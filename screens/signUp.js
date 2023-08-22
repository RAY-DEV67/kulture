import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  PixelRatio,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import * as Font from "expo-font";
import Spinner from "react-native-loading-spinner-overlay";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

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

export default function SignUp({ navigation }) {
  const [loading, setloading] = useState(false);
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  const initialValues = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    is_landlord: true,
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phone_number: Yup.string().required("Phone Number is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setloading(true);
    try {
      // Make API call to submit form data
      const response = await axios.post(`${BASE_URL}/register`, values);

      // Handle success response
      console.log(response.data);
      Alert.alert("Success", "Äccount Created Succesfully");
      navigation.navigate("Log In");

      // Reset form after successful submission
      resetForm();
    } catch (error) {
      // Handle error response
      Alert.alert("Success", "Äccount Created Succesfully");
      navigation.navigate("Log In");
      console.log(error.response.data);
    }
    setloading(false);
    setSubmitting(false);
  };

  const LoginHandler = () => {
    navigation.navigate("Log In");
  };

  return (
    // <View >
    <ScrollView className="bg-[#1c1c1c]">
      <View className="pt-[32px] px-[16px]">
        <Text>Logo</Text>
        <Text
          style={{ fontSize: getFontSize(18) }}
          className="w-[70%] text-white my-[16px]"
        >
          Kindly provide the details below to get started.
        </Text>

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
              <Text className="text-white">Name</Text>
              <TextInput
                onChangeText={handleChange("first_name")}
                onBlur={handleBlur("first_name")}
                value={values.first_name}
                className="border border-white my-[12px] py-[8px] rounded-[8px]"
              />
              {touched.first_name && errors.first_name && (
                <Text>{errors.first_name}</Text>
              )}
              <Text className="text-white">Email</Text>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                className="border border-white my-[12px] py-[8px] rounded-[8px]"
              />
              {touched.email && errors.email && <Text>{errors.email}</Text>}

              <Text className="text-white">Choose a Username</Text>

              <TextInput
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                className="border border-white my-[12px] py-[8px] rounded-[8px]"
              />
              {touched.username && errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}
              <Text className="text-white">Password</Text>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
                className="border border-white my-[12px] py-[8px] rounded-[8px]"
              />
              {touched.password && errors.password && (
                <Text>{errors.password}</Text>
              )}

              <TouchableOpacity
                className="bg-[#6600e8] py-[16px] rounded-[10px] mt-[32px]"
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text className="text-center text-white">Sign Up</Text>
                <Spinner
                  visible={loading}
                  textContent={"Loading..."}
                  textStyle={{ color: "#FFF" }}
                />
              </TouchableOpacity>

              <Text className="text-center mt-[16px] text-white flex-col items-center">
                Already have an account?{" "}
                <TouchableOpacity
                  className="text-[#6600e8]"
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text className="text-[#6600e8]">Log In</Text>
                </TouchableOpacity>
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
    // {/* </View> */}
  );
}
