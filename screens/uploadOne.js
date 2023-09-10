import { View, Image, Text, TouchableOpacity, PixelRatio } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function UploadOne({ navigation }) {
  const [uploadType, setuploadType] = useState("");
  const [error, seterror] = useState("");

  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[64px] px-[16px]">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text
        className="text-white font-semibold my-[24px]"
        style={{ fontSize: getFontSize(20) }}
      >
        Please select your upload type
      </Text>

      <View>
        <TouchableOpacity
          className={`bg-[#434343] px-[32px] h-[18vh] flex-col justify-center rounded-[8px] ${
            uploadType === "Single" ? "border-[2px] border-[#6600e8]" : null
          }`}
          onPress={() => {
            setuploadType("Single");
          }}
        >
          <View className="flex-row items-center">
            <Image
              source={require("../assets/ep.png")}
              className="object-contain"
            />
            <Text className="ml-[32px] text-white font-semibold">Single</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className={`bg-[#434343] px-[32px] h-[18vh] my-[16px] flex-col justify-center rounded-[8px] ${
            uploadType === "EP" ? "border-[2px] border-[#6600e8]" : null
          }`}
          onPress={() => {
            setuploadType("EP");
          }}
        >
          <View className="flex-row items-center">
            <Image
              source={require("../assets/single.png")}
              className="object-contain"
            />
            <Text className="ml-[32px] text-white font-semibold">
              Extended Plays (EP)
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className={`bg-[#434343] px-[32px] h-[18vh] flex-col justify-center rounded-[8px] ${
            uploadType === "LP" ? "border-[2px] border-[#6600e8]" : null
          }`}
          onPress={() => {
            setuploadType("LP");
          }}
        >
          <View className="flex-row items-center">
            <Image
              source={require("../assets/lp.png")}
              className="object-contain"
            />
            <Text className="ml-[32px] text-white font-semibold">
              Long Plays (LP)
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-[#6600e8] py-[16px] rounded-[10px] mt-[32px]"
        onPress={() => {
          {
            !uploadType
              ? seterror("Please select an upload type")
              : navigation.navigate("UploadTwo");
          }
        }}
      >
        <Text className="text-center text-white">Next</Text>
      </TouchableOpacity>

      <Text className="text-red-500 text-center my-[16px]">{error}</Text>
    </View>
  );
}

export default UploadOne;
