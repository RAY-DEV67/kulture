import { AntDesign } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
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
  Modal,
  FlatList,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

const BASE_URL = "https://kulture-api.onrender.com/api/v1";
const Type = ["producer", "artiste"];

function CustomDropdown({ options, selectedValue, onSelect }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "white",
          marginTop: 16,
          padding: 8,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>
          {selectedValue || "Choose Genre"}
        </Text>
        <AntDesign
          name={modalVisible ? "up" : "down"}
          size={24}
          color="white"
        />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          className="pt-[75vh] flex-col items-center justify-end w-[100vw]"
          onPress={() => setModalVisible(false)}
        >
          <View className="bg-[#1c1c1c] border-t border-white h-[40vh] w-[100vw]">
            <Text className="bg-gray-400 p-[16] text-white font-semibold">
              Choose a Genre
            </Text>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onSelect(item);
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text className="w-[100vw] px-[16px] py-[8px] text-white">
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

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

    console.log(values);
    try {
      // Make API call to submit form data
      const response = await axios.post(`${BASE_URL}/register`, values);

      // Handle success response
      console.log(response.data);
      Toast.show({
        type: "success", // Toast type (success, error, info)
        position: "top", // Position of the toast (top, bottom)
        text1: `Welcome To Kulture🙌`, // Main text
        text2: `Account created succesfully🎉`, // Subtext or additional information
        visibilityTime: 3000, // Duration the toast should be visible (in milliseconds)
        autoHide: true, // Hide the toast automatically after `visibilityTime`
        topOffset: 50, // Customize the position from the top (in pixels)
        bottomOffset: 40, // Customize the position from the bottom (in pixels)
      });
      navigation.navigate("Login");

      // Reset form after successful submission
      resetForm();
    } catch (error) {
      // Handle error response
      console.log(error.response.data);
      Alert.alert("Error", error.response.data.message);
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
                className="border border-white my-[12px] px-[8px] py-[16px] text-white rounded-[8px]"
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
                className="border border-white my-[12px] px-[8px] py-[16px] text-white rounded-[8px]"
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
                className="border border-white my-[12px] px-[8px] py-[16px] text-white rounded-[8px]"
              />
              {touched.email && errors.email && (
                <Text className="text-red-500 mb-[16px]">{errors.email}</Text>
              )}

              <Text className="text-white">Choose a Username</Text>

              <TextInput
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                className="border border-white my-[12px] px-[8px] py-[16px] text-white rounded-[8px]"
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
                // secureTextEntry
                className="border border-white my-[12px] px-[8px] py-[16px] text-white rounded-[8px]"
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
                // secureTextEntry
                className="border border-white my-[12px] px-[8px] py-[16px] text-white rounded-[8px]"
              />
              {touched.confirm_password && errors.confirm_password && (
                <Text className="text-red-500 mb-[16px]">
                  {errors.confirm_password}
                </Text>
              )}
              <Text className="mt-[16px] text-white">
                {" "}
                Are you an artiste or a producer?
              </Text>
              <CustomDropdown
                options={Type}
                selectedValue={values.user_type}
                onSelect={handleChange("user_type")}
              />
              {/* <TextInput
                onChangeText={handleChange("user_type")}
                onBlur={handleBlur("user_type")}
                value={values.user_type}
                className="border border-white my-[12px] p-[8px] text-white rounded-[8px]"
              /> */}
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
