import { View, Text, PixelRatio, TouchableOpacity,Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Notifications() {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[32px] px-[16px]">
      <View className="flex-row justify-between items-center mb-[32px]">
      <Ionicons name="chevron-back" size={24} color="white" />
        <View className="flex-row items-center">
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
          <Image
            source={require("../assets/noProfile.jpg")}
            className="w-[10vw] h-[10vw] rounded-full object-contain"
          />
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
