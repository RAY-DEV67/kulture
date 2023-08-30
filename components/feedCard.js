import { Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

function FeedCard({ key, beats }) {
  console.log("beats", beats);

  return (
    <View
      key={key}
      className="border my-[8px] rounded-[10px] p-[8px] border-[#292929]"
    >
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
              // style={styles.ProductImage}
            />
          </View>
          <View className="ml-[16px]">
            <Text className="text-white font-semibold mt-[8px] w-[100px]">
              {beats.attributes.name}
            </Text>
            <Text className="text-[#434343]">by andy .2.30</Text>
            <Text className="text-[#ceb0f3]">Price</Text>
          </View>
        </View>

        <TouchableOpacity className="bg-[#6600e8] w-[100px] p-[10px] rounded-[10px]">
          <Text className="text-center text-white">Buy Now</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center">
        <Text className="mr-[8px] text-white text-[12px]">Share</Text>
        <Text className="ml-[8px] text-white text-[12px]">Save for later</Text>
      </View>
    </View>
  );
}

export default FeedCard;
