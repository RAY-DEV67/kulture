import { Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

function PopularBeatsCard({ key, beats }) {
  console.log("beats", beats);

  return (
    <View key={key} className="">
      <View className="absolute z-10 h-[200px] w-[100%] bg-black opacity-30"></View>
      <View className="absolute z-10 h-[200px] w-[100%] flex-col justify-center items-center">
        <Feather name="play-circle" size={40} color="white" />
      </View>
      <Image
        source={{ uri: beats.attributes.image_url }}
        className="w-[100%] h-[200px] rounded-[15px]"
        // style={styles.ProductImage}
      />
      <Text className="text-center text-white font-semibold mt-[8px]">
        {beats.attributes.name}
      </Text>
    </View>
  );
}

export default PopularBeatsCard;
