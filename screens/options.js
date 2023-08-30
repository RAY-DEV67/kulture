import { View, Text, TouchableOpacity, PixelRatio, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Options({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[48px]">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        className="px-[16px]"
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text
        className="text-white mt-[16px] font-semibold px-[16px]"
        style={{ fontSize: getFontSize(23) }}
      >
        Options
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        className="flex-row justify-between bg-[#292929] px-[16px] mt-[16px] py-[10px]"
      >
        <View className="flex-row">
          <Image
            source={require("../assets/profileIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">My Profile</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <Text
        className="text-white mt-[16px] font-semibold px-[16px]"
        style={{ fontSize: getFontSize(23) }}
      >
        My Beats
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Saved")}
        className="flex-row justify-between bg-[#292929] px-[16px] mt-[16px] py-[10px]"
      >
        <View className="flex-row">
          <Image
            source={require("../assets/SaveIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">Save for later</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <Text
        className="text-white mt-[16px] font-semibold px-[16px]"
        style={{ fontSize: getFontSize(23) }}
      >
        My Shopping
      </Text>

      <View className="flex-row justify-between bg-[#292929] px-[16px] mt-[16px] py-[10px]">
        <View className="flex-row">
          <Image
            source={require("../assets/DownloadIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">Downloads</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("MyOrders")}
        className="flex-row justify-between bg-[#292929] px-[16px] py-[10px]"
      >
        <View className="flex-row">
          <Image
            source={require("../assets/OrdersIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">My Orders</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("MyUploads")}
        className="flex-row justify-between bg-[#292929] px-[16px] py-[10px]"
      >
        <View className="flex-row">
          <Image
            source={require("../assets/uploadIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">My Uploads</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <Text
        className="text-white mt-[16px] font-semibold px-[16px]"
        style={{ fontSize: getFontSize(23) }}
      >
        Settings
      </Text>

      <TouchableOpacity
        className="flex-row justify-between bg-[#292929] px-[16px] mt-[16px] py-[10px]"
        onPress={() => {
          navigation.navigate("AccountSettings");
        }}
      >
        <View className="flex-row">
          <Image
            source={require("../assets/profileIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">Account settings</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default Options;
