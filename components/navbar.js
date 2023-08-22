import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";

function Navbar({}) {
  const [screen, setscreen] = useState("Home");
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center px-[32px] pb-[8px] pt-[16px] border-t-[0.2px] border-white bg-[#1c1c1c]">
      <TouchableOpacity
        className={`flex-col items-center ${
          screen === "Home" ? "bg-[#ceb0f3] p-[10px] rounded-[8px]" : ""
        }`}
        onPress={() => {
          setscreen("Home");
          navigation.navigate("Home", { screen: "Home" });
        }}
      >
        <Octicons
          name="home"
          size={20}
          color={screen === "Home" ? "#6600e8" : "white"}
        />
        {screen !== "Home" && (
          <Text className="text-white text-[12px] mt-[4px]">Home</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        className={`flex-col items-center ${
          screen === "Upload" ? "bg-[#ceb0f3] p-[10px] rounded-[8px]" : ""
        }`}
        onPress={() => {
          setscreen("Upload");
          navigation.navigate("UploadOne");
        }}
      >
        <MaterialIcons
          name="upload-file"
          size={20}
          color={screen === "Upload" ? "#6600e8" : "white"}
        />
        {screen !== "Upload" && (
          <Text className="text-white text-[12px] mt-[4px]">Upload</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        className={`flex-col items-center ${
          screen === "Cart" ? "bg-[#ceb0f3] p-[10px] rounded-[8px]" : ""
        }`}
        onPress={() => {
          setscreen("Cart");
        }}
      >
        <FontAwesome
          name="opencart"
          size={20}
          color={screen === "Cart" ? "#6600e8" : "white"}
        />
        {screen !== "Cart" && (
          <Text className="text-white text-[12px] mt-[4px]">Cart</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        className={`flex-col items-center ${
          screen === "Option" ? "bg-[#ceb0f3] p-[10px] rounded-[8px]" : ""
        }`}
        onPress={() => {
          setscreen("Option");
          navigation.navigate("Options");
        }}
      >
        <Fontisto
          name="nav-icon-a"
          size={20}
          color={screen === "Option" ? "#6600e8" : "white"}
        />
        {screen !== "Option" && (
          <Text className="text-white text-[12px] mt-[4px]">Option</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(Navbar);
