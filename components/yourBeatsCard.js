import axios from "axios";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

function YourBeatsCard({ key, beats, navigation }) {
  console.log(beats.id);

  const uploadFavourite = async () => {
    try {
      const apiEndpoint = `https://kulture-api.onrender.com/api/v1/favourites/${beats.id}`;

      const response = await axios.post(apiEndpoint);

      if (response.status === 200) {
        console.log("Beat uploaded successfully");
        console.log(response.data);
      } else {
        console.log("Error uploading beat");
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  };

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
              source={{ uri: beats.imageUrl ? beats.imageUrl : null  }}
              className="w-[100px] h-[100px] rounded-[15px]"
              // style={styles.ProductImage}
            />
          </View>
          <View className="ml-[16px]">
            <Text className="text-white font-semibold mt-[8px]">
              {beats.name}
            </Text>
            <Text className="text-[#434343] my-[8px]">
              {beats.duration}
            </Text>
            <Text className="text-[#ceb0f3]">
              {formatCur(beats.price, "en-NG", "NGN")}
            </Text>
          </View>
        </View>
      </View>

   
    </View>
  );
}

export default YourBeatsCard;
