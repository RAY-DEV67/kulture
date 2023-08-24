import { Text, View, TouchableOpacity, PixelRatio } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Cart() {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = (size) => size / fontScale;

    return (<View className="bg-[#1c1c1c] h-[100vh] pt-[48px]">
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
        Cart
      </Text>

    </View>  );
}

export default Cart;