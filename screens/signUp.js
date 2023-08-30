import React from "react";
import {
  Text,
  View,
  TextInput,
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
import Spinner from "react-native-loading-spinner-overlay";

const BASE_URL = "https://kulture-api.onrender.com/api/v1";

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
    user_type: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    user_type: Yup.string().required("User Type is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setloading(true);
    try {
      // Make API call to submit form data
      const response = await axios.post(`${BASE_URL}/register`, values);

      // Handle success response
      console.log(response.data);
      Alert.alert("Success", "Account Created Succesfully");
      navigation.navigate("Login");

      // Reset form after successful submission
      resetForm();
    } catch (error) {
      // Handle error response
      console.log(error.response.data);
    }
    setloading(false);
    setSubmitting(false);
  };

  return (
    // <View >
    <ScrollView className="bg-[#1c1c1c]">
      <View className="pt-[32px] px-[16px]">
        <Image
          source={require("../assets/logo.png")}
          className="w-[30vw] h-[10vw] mt-[16px] rounded-full object-contain"
        />
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
              <Text className="text-white">First Name</Text>
              <TextInput
                onChangeText={handleChange("first_name")}
                onBlur={handleBlur("first_name")}
                value={values.first_name}
                className="border border-white my-[12px] p-[8px] text-white rounded-[8px]"
              />
              {touched.first_name && errors.first_name && (
                <Text className="text-red-500 mb-[16px]">
                  {errors.first_name}
                </Text>
              )}

              <Text className="text-white">Last Name</Text>
              <TextInput
                onChangeText={handleChange("last_name")}
                onBlur={handleBlur("last_name")}
                value={values.last_name}
                className="border border-white my-[12px] p-[8px] text-white rounded-[8px]"
              />
              {touched.last_name && errors.last_name && (
                <Text className="text-red-500 mb-[16px]">
                  {errors.last_name}
                </Text>
              )}
              <Text className="text-white">Email</Text>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                className="border border-white my-[12px] p-[8px] text-white rounded-[8px]"
              />
              {touched.email && errors.email && (
                <Text className="text-red-500 mb-[16px]">{errors.email}</Text>
              )}

              <Text className="text-white">Choose a Username</Text>

              <TextInput
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                className="border border-white my-[12px] p-[8px] text-white rounded-[8px]"
              />
              {touched.username && errors.username && (
                <Text className="text-red-500 mb-[16px]">
                  {errors.username}
                </Text>
              )}
              <Text className="text-white">Password</Text>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
                className="border border-white my-[12px] p-[8px] text-white rounded-[8px]"
              />
              {touched.password && errors.password && (
                <Text className="text-red-500 mb-[16px]">
                  {errors.password}
                </Text>
              )}

              <Text className="text-white">Confirm Password</Text>
              <TextInput
                onChangeText={handleChange("confirm_password")}
                onBlur={handleBlur("confirm_password")}
                value={values.confirm_password}
                secureTextEntry
                className="border border-white my-[12px] p-[8px] text-white rounded-[8px]"
              />
              {touched.confirm_password && errors.confirm_password && (
                <Text className="text-red-500 mb-[16px]">
                  {errors.confirm_password}
                </Text>
              )}

              <Text className="text-white">
                Are you an artiste or a producer?
              </Text>
              <TextInput
                onChangeText={handleChange("user_type")}
                onBlur={handleBlur("user_type")}
                value={values.user_type}
                className="border border-white my-[12px] p-[8px] text-white rounded-[8px]"
              />
              {touched.user_type && errors.user_type && (
                <Text className="text-red-500 mb-[16px]">
                  {errors.user_type}
                </Text>
              )}

              <TouchableOpacity
                className="bg-[#6600e8] py-[16px] rounded-[10px] mt-[32px]"
                onPress={handleSubmit}
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
