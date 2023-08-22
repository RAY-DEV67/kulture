import { View, Text, PixelRatio, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Home({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  return (
    <View className="bg-[#1c1c1c] pt-[32px] px-[16px]">
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
          Popular Uploads
        </Text>
      </View>

      <View className="mt-[16px]">
        <View className="flex-row justify-between items-center">
          <Text
            className="text-white font-semibold"
            style={{ fontSize: getFontSize(20) }}
          >
            Feed
          </Text>
          <Text
            className="text-[#ceb0f3] font-semibold"
            style={{ fontSize: getFontSize(15) }}
          >
            See all
          </Text>
        </View>

        <View className="my-[16px] flex-row">
          <View className="border bg-gray-400 border-white w-[10vw] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">All</Text>
          </View>

          <View className="border bg-gray-400 border-white w-[20vw] mx-[16px] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">Afro beats</Text>
          </View>

          <View className="border bg-gray-400 border-white w-[15vw] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">World</Text>
          </View>

          <View className="border bg-gray-400 border-white w-[10vw] mx-[16px] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">Fuji</Text>
          </View>

          <View className="border bg-gray-400 border-white w-[10vw] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">Juju</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;
