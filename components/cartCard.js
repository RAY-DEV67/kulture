import { Text, View, Image, TouchableOpacity, PixelRatio } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import { CartedBeats } from "../App";

function CartCard({ beats, removeFromCart}) {
  const { cart, setCart } = useContext(CartedBeats);

  const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  };

  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  return (
    <View className="border my-[8px] mx-[16px] rounded-[10px] p-[8px] border-[#292929]">
      <View>
        <View className="flex-row items-center justify-between">
          <View className="flex-row">
            <View>
              <View className="absolute z-10 rounded-[10px] h-[100px] w-[100%] bg-black opacity-30"></View>
              <View className="absolute z-10 h-[100px] w-[100%] flex-col justify-center items-center">
                <Feather name="play-circle" size={40} color="white" />
              </View>
              <Image
                source={{ uri: beats.attributes.image_url }}
                className="w-[100px] h-[100px] rounded-[15px]"
              />
            </View>
            <View className="ml-[16px]">
              <Text
                style={{ fontSize: getFontSize(18) }}
                className="text-white font-semibold mt-[8px] w-[100%]"
              >
                {beats.attributes.name}
              </Text>
              <Text
                style={{ fontSize: getFontSize(18) }}
                className="text-[#ceb0f3] mt-[8px]"
              >
                {formatCur(beats.attributes.price, "en-NG", "NGN")}
              </Text>
            </View>
          </View>
        </View>

        <View className="w-[55%] flex-row justify-end">
          <Text
            style={{ fontSize: getFontSize(13) }}
            className="ml-[8px] text-white text-[12px]"
          >
            {beats.license}
          </Text>
        </View>
      </View>

      <TouchableOpacity
      onPress={removeFromCart}
      className="absolute left-[95%] top-[16px]">
        <Text
          className="text-white font-bold"
          style={{ fontSize: getFontSize(18) }}
        >
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CartCard;
