import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
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
  Modal,
  FlatList,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import * as Font from "expo-font";
import Spinner from "react-native-loading-spinner-overlay";

const BASE_URL = "http://54.210.116.44/api/v1";

const Bank = [
  "Afro Drill",
  "Afro",
  "Alte",
  "Afro Trap",
  "World",
  "Fuji Fusion",
  "Hip Hop/ Rap",
];

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
          borderColor: "#1c1c1c",
          marginTop: 16,
          padding: 8,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#1c1c1c" }}>
          {selectedValue || "Select Bank"}
        </Text>
        <AntDesign
          name={modalVisible ? "up" : "down"}
          size={24}
          color="#1c1c1c"
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
              Choose a Bank
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

function AddAccount({ navigation }) {
  const [loading, setloading] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

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
    <ScrollView className="bg-white">
      <View className="pt-[32px] px-[16px]">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PaymentAccount");
          }}
          className=""
        >
          <Ionicons name="chevron-back" size={24} color="#1c1c1c" />
        </TouchableOpacity>
        <Text
          style={{ fontSize: getFontSize(23) }}
          className="w-[70%] text-[#1c1c1c] mt-[16px] mb-[8px] font-semibold"
        >
          Add Account
        </Text>
        <Text
          style={{ fontSize: getFontSize(15) }}
          className="w-[70%] text-[#1c1c1c] mb-[24px]"
        >
          account Image
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
              <Text className="text-[#1c1c1c]">Account Number</Text>
              <TextInput
                onChangeText={handleChange("first_name")}
                onBlur={handleBlur("first_name")}
                value={values.first_name}
                className="border border-[#1c1c1c] my-[12px] py-[8px] rounded-[8px]"
              />
              {touched.first_name && errors.first_name && (
                <Text>{errors.first_name}</Text>
              )}
              <Text className="text-[#1c1c1c]">Account Name</Text>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                className="border border-[#1c1c1c] my-[12px] py-[8px] rounded-[8px]"
              />
              {touched.email && errors.email && <Text>{errors.email}</Text>}
              <Text className="mt-[16px] text-[#1c1c1c]">Select Bank</Text>
              <CustomDropdown
                options={Bank}
                selectedValue={selectedBank}
                onSelect={setSelectedBank}
              />

              <TouchableOpacity
                className="bg-[#6600e8] py-[16px] rounded-[10px] my-[32px]"
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

export default AddAccount;
