import { Text, View, TouchableOpacity, PixelRatio } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { CartedBeats } from "../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CartCard from "../components/cartCard";

function Cart() {
  const { cart, setcart } = useContext(CartedBeats);

  const removeFromCart = async (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setcart(updatedCart);

    // Update cart in AsyncStorage
    try {
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error updating cart in AsyncStorage:", error);
    }
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
        className="text-white mt-[16px] font-semibold px-[16px]"
        style={{ fontSize: getFontSize(23) }}
      >
        Cart
      </Text>

      {cart?.length === 0 && <Text
                className="text-white text-center mt-[32px]"
                style={{ fontSize: getFontSize(20) }}
              >
                Your Cart Is Empty
              </Text>}

      {cart?.map((items, index) => (
        <View key={index}>
          <CartCard
            beats={items}
            removeFromCart={() => removeFromCart(index)}
          />
        </View>
      ))}
    </View>
  );
}

export default Cart;
