import { View, Text, PixelRatio, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Notifications() {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[32px] px-[16px]">
      <View className="flex-row justify-between mb-[32px]">
        <Text className="text-white">Logo</Text>
        <View className="flex-row">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Feather name="search" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Notifications");
            }}
            className="mx-[16px]"
          >
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
          <Text>Avatar</Text>
        </View>
      </View>

      <View>
        <Text
          className="text-white font-semibold"
          style={{ fontSize: getFontSize(25) }}
        >
          Notification
        </Text>
      </View>
    </View>
  );
}

export default Notifications;
