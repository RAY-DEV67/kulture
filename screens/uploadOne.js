import { View, Text, TouchableOpacity, PixelRatio } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function UploadOne({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[48px] px-[16px]">
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
        <TouchableOpacity className="bg-gray-400 px-[32px] h-[18vh] flex-col justify-center rounded-[8px]">
          <View className="flex-row">
            <Text>Image</Text>
            <Text className="ml-[32px] text-white font-semibold">Single</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-400 px-[32px] h-[18vh] flex-col justify-center rounded-[8px] my-[16px]">
          <View className="flex-row">
            <Text>Image</Text>
            <Text className="ml-[32px] text-white font-semibold">
              Extended Plays (EP)
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-400 px-[32px] h-[18vh] flex-col justify-center rounded-[8px]">
          <View className="flex-row">
            <Text>Image</Text>
            <Text className="ml-[32px] text-white font-semibold">
              Long Plays (LP)
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-[#6600e8] py-[16px] rounded-[10px] mt-[32px]"
        onPress={() => {
          navigation.navigate("UploadTwo");
        }}
      >
        <Text className="text-center text-white">Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UploadOne;
