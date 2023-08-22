import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
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

const BASE_URL = "http://54.210.116.44/api/v1";

function EditProfileInformation({ navigation }) {
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AccountSettings");
          }}
          className=""
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text
          style={{ fontSize: getFontSize(23) }}
          className="w-[70%] text-white mt-[16px] mb-[8px]"
        >
          Account Setting
        </Text>
        <Text
          style={{ fontSize: getFontSize(15) }}
          className="w-[70%] text-white mb-[24px]"
        >
          Profile Information
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
              <Text className="text-white">Display Name</Text>
              <TextInput
                onChangeText={handleChange("first_name")}
                onBlur={handleBlur("first_name")}
                value={values.first_name}
                className="border border-white my-[12px] py-[8px] rounded-[8px]"
              />
              {touched.first_name && errors.first_name && (
                <Text>{errors.first_name}</Text>
              )}
              <Text className="text-white">First Name</Text>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                className="border border-white my-[12px] py-[8px] rounded-[8px]"
              />
              {touched.email && errors.email && <Text>{errors.email}</Text>}

              <Text className="text-white">Location</Text>

              <TextInput
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                className="border border-white my-[12px] py-[8px] rounded-[8px]"
              />
              {touched.username && errors.username && (
                <Text>{errors.username}</Text>
              )}
              <Text className="text-white">Intro</Text>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
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
                <Text className="text-center text-white">Submit</Text>
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
    </ScrollView>
    // {/* </View> */}
  );
}

export default EditProfileInformation;
