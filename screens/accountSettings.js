import { View, Text, TouchableOpacity, PixelRatio, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function AccountSettings({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[32px]">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Options");
        }}
        className="px-[16px]"
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text
        className="text-white mt-[16px] font-semibold px-[16px]"
        style={{ fontSize: getFontSize(23) }}
      >
        Account Settings
      </Text>

      <TouchableOpacity
        className="flex-row justify-between bg-[#292929] px-[16px] mt-[16px] py-[10px]"
        onPress={() => {
          navigation.navigate("EditProfileInformation");
        }}
      >
        <View className="flex-row">
        <Image
            source={require("../assets/profileIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">Profile Information</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate("SocialMedia")
      }} className="flex-row justify-between bg-[#292929] px-[16px] py-[10px]">
        <View className="flex-row">
        <Image
            source={require("../assets/LinkIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">Social media links</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PaymentAccount");
        }}
        className="flex-row justify-between bg-[#292929] px-[16px] py-[10px]"
      >
        <View className="flex-row">
        <Image
            source={require("../assets/paymentIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">Payment Accounts</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row justify-between bg-[#292929] px-[16px] py-[10px]"
        onPress={() => {
          navigation.navigate("BillingAddress");
        }}
      >
        <View className="flex-row">
        <Image
            source={require("../assets/BillingIcon.png")}
            className=" object-contain"
          />
          <Text className="text-white ml-[16px]">Billing Address</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default AccountSettings;
