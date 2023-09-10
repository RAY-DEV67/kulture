import axios from "axios";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AccessToken, UserId } from "../App";
import { useContext } from "react";

function FeedCard({ key, beats, navigation }) {
  const accessToken = useContext(AccessToken);
  const userId = useContext(UserId);
  console.log(userId);

  const uploadFavourite = async () => {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };
      const apiEndpoint =
        `https://kulture-api.onrender.com/api/v1/carts/add/${userId}`;
      const response = await axios.post(apiEndpoint, { headers });

      console.log(response?.data);
      // Toast.show({
      //   type: "success", // Toast type (success, error, info)
      //   position: "top", // Position of the toast (top, bottom)
      //   text1: `Successful🙌`, // Main text
      //   text2: `Beat Uploaded succesfully🎉`, // Subtext or additional information
      //   visibilityTime: 3000, // Duration the toast should be visible (in milliseconds)
      //   autoHide: true, // Hide the toast automatically after `visibilityTime`
      //   topOffset: 50, // Customize the position from the top (in pixels)
      //   bottomOffset: 40, // Customize the position from the bottom (in pixels)
      // });
      // setloading(false);
    } catch (error) {
      // Handle error response
      console.log(error.response?.data);
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
              source={{
                uri: beats.attributes.image_url
                  ? beats.attributes.image_url
                  : null,
              }}
              className="w-[100px] h-[100px] rounded-[15px]"
              // style={styles.ProductImage}
            />
          </View>
          <View className="ml-[16px]">
            <Text className="text-white font-semibold mt-[8px] w-[100px]">
              {beats.attributes.name}
            </Text>
            <Text className="text-[#434343] my-[8px]">
              {beats.attributes.duration}
            </Text>
            <Text className="text-[#ceb0f3]">
              {formatCur(beats.attributes.price, "en-NG", "NGN")}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("ChooseLicense", { beats: beats });
            uploadFavourite();
          }}
          className="bg-[#6600e8] w-[100px] p-[10px] rounded-[10px]"
        >
          <Text className="text-center text-white">Buy Now</Text>
        </TouchableOpacity>
      </View>

      {/* <View className="flex-row justify-center">
        <Text className="mr-[8px] text-white text-[12px]">Share</Text>
        <TouchableOpacity onPress={() => uploadFavourite()}>
          <Text className="ml-[8px] text-white text-[12px]">
            Save for later
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

export default FeedCard;
