import { Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, PixelRatio, Image } from "react-native";

function PaymentAccount({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[32px] px-[16px]">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AccountSettings");
        }}
        className=""
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text
        style={{ fontSize: getFontSize(23) }}
        className="w-[70%] text-white mt-[16px] mb-[8px] font-semibold"
      >
        Account Setting
      </Text>
      <Text
        style={{ fontSize: getFontSize(15) }}
        className="w-[70%] text-white mb-[24px]"
      >
        Payment Account
      </Text>

      <View className="flex-col items-center justify-center">
      <Image
        source={require("../assets/paymentImage.png")}
        className="mt-[16px] rounded-full object-contain"
      />
        <Text className="text-white">No billing payment were found</Text>
      </View>

      <TouchableOpacity className="absolute top-[80vh] left-[85vw]" onPress={() => {
        navigation.navigate("AddAccount")
      }}>
        <Ionicons name="ios-add-circle-sharp" size={50} color="#6600e8" />
      </TouchableOpacity>
    </View>
  );
}

export default PaymentAccount;