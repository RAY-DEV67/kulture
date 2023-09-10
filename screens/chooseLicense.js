import { Text, View, TouchableOpacity, PixelRatio } from "react-native";
import { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CartedBeats } from "../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ChooseLicense({ route, navigation }) {
  const { beats } = route.params;
  const { cart, setcart } = useContext(CartedBeats);

  const [license, setlicense] = useState("");
  const [licenseError, setlicenseError] = useState("");

  const handleAddToCart = async () => {
    if (license) {
      // Create a new object by adding the "license" key to the beat object
      const beatWithLicense = { ...beats, license };

       // Update the cart array and save it to AsyncStorage
    const updatedCart = [...cart, beatWithLicense];
    setcart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      // Navigate back to the Home screen
      navigation.navigate("Home");
    } else {
      setlicenseError("Please Select A License");
    }
  };

  const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  };

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
        className="text-white my-[16px] font-semibold px-[16px]"
        style={{ fontSize: getFontSize(23) }}
      >
        Choose License
      </Text>
      <View className="flex-col h-[75vh] justify-between">
        <TouchableOpacity
          onPress={() => {
            setlicense("Basic License");
          }}
          className={`bg-[#292929] m-[16px] py-[8px] rounded-[10px] ${
            license === "Basic License" ? "border-[2px] border-[#6600e8]" : null
          }`}
        >
          <View className="flex-row justify-between items-center">
            <Text
              style={{ fontSize: getFontSize(18) }}
              className="text-white mt-[8px] font-semibold px-[16px]"
            >
              Basic License
            </Text>
            <Text className="text-white mt-[8px] font-semibold px-[16px]">
              {formatCur(beats.attributes.price, "en-NG", "NGN")}
            </Text>
          </View>
          <Text
            style={{ fontSize: getFontSize(15) }}
            className="text-white my-[8px] font-semibold px-[16px]"
          >
            Mp3
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity className="bg-[#292929] m-[16px] rounded-[10px]">
        <View className="flex-row justify-between items-center">
          <Text
            style={{ fontSize: getFontSize(18) }}
            className="text-white mt-[8px] font-semibold px-[16px]"
          >
            Premium License
          </Text>
          <Text className="text-white mt-[8px] font-semibold px-[16px]">
            Price
          </Text>
        </View>
        <Text
          style={{ fontSize: getFontSize(15) }}
          className="text-white my-[8px] font-semibold px-[16px]"
        >
          Mp3
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-[#292929] m-[16px] rounded-[10px] py-[8px]">
        <View className="flex-row justify-between items-center">
          <Text
            style={{ fontSize: getFontSize(18) }}
            className="text-white mt-[8px] font-semibold px-[16px]"
          >
            Premium Plus License
          </Text>
          <Text className="text-white mt-[8px] font-semibold px-[16px]">
            Price
          </Text>
        </View>
        <Text
          style={{ fontSize: getFontSize(15) }}
          className="text-white my-[8px] font-semibold px-[16px]"
        >
          Mp3
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-[#292929] m-[16px] rounded-[10px]">
        <View className="flex-row justify-between items-center">
          <Text
            style={{ fontSize: getFontSize(18) }}
            className="text-white mt-[8px] font-semibold px-[16px]"
          >
            Unlimited License
          </Text>
          <Text className="text-white mt-[8px] font-semibold px-[16px]">
            Price
          </Text>
        </View>
        <Text
          style={{ fontSize: getFontSize(15) }}
          className="text-white my-[8px] font-semibold px-[16px]"
        >
          Mp3
        </Text>
      </TouchableOpacity> */}

        <View>
          <TouchableOpacity
            onPress={() => {
              handleAddToCart();
            }}
            className="bg-[#6600e8] mx-[16px] py-[14px] rounded-[10px]"
          >
            <Text
              className="text-center text-white font-semibold"
              style={{ fontSize: getFontSize(14) }}
            >
              Add To Cart
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            className="border border-[#6600e8] mx-[16px] my-[16px] py-[14px] rounded-[10px]"
          >
            <Text
              className="text-center text-white font-semibold"
              style={{ fontSize: getFontSize(14) }}
            >
              Continue Shopping
            </Text>
          </TouchableOpacity>

          <Text className="text-red-500 text-center">{licenseError}</Text>
        </View>
      </View>
    </View>
  );
}

export default ChooseLicense;
