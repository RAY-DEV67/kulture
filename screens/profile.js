import Swiper from "react-native-swiper";
import {
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  Image,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";

function Profile({navigation}) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  const handleIndexChange = (index) => {
    setActiveIndex(index);
    swiperRef.current.scrollBy(index - swiperRef.current.state.index, true);
  };

  const handleSwiperIndexChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[48px]">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Options");
        }}
        className="px-[16px]"
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text
        className="text-white mt-[16px] font-semibold px-[16px]"
        style={{ fontSize: getFontSize(23) }}
      >
        My Profile
      </Text>

      <View className="bg-red-300 m-[16px] p-[16px] flex-row items-center rounded-[10px]">
        <Image
          source={require("../assets/noProfile.jpg")}
          className="w-[30vw] rounded-full object-contain h-[30vw] mr-[8px]"
        />
        <View className="ml-[16px]">
          <View className="bg-[#1c1c1c] p-[16px]  rounded-[10px]">
            <Text className=" text-white text-center">Username username</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("UploadOne")} className="bg-[#6600e8] p-[16px] mt-[8px] rounded-[10px]">
            <Text
              className="text-white text-center font-semibold"
              style={{ fontSize: getFontSize(15) }}
            >
              Upload Beat
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mx-[16px]">
        <View className="flex-row justify-between items-center">
          <Text className="text-white" style={{ fontSize: getFontSize(24) }}>
            Intro
          </Text>
          <TouchableOpacity onPress={() => {
          navigation.navigate("EditProfileInformation");
        }}>
            <Text
              className="text-blue-600 font-semibold"
              style={{ fontSize: getFontSize(15) }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-white my-[16px]">
          Intro text Intro text Intro textIntro textIntro textIntro textIntro
          textIntro text Intro text Intro text Intro text Intro text Intro text
          Intro text Intro text Intro text Intro text
        </Text>

        <View className="flex-row gap-3">
          <Text className="text-white">Location Icon Location</Text>
          <Text className="text-white">Icon</Text>
          <Text className="text-white">Fb Icon</Text>
          <Text className="text-white">Ig Icon</Text>
        </View>
      </View>

      <View className="flex-row items-center mt-[32px]">
        <TouchableOpacity
          className={`${
            activeIndex === 0
              ? " border-[#6600e8] border-b-[3px] py-[8px] mx-[16px]"
              : "bg-transparent mx-[16px]"
          }`}
          onPress={() => handleIndexChange(0)}
        >
          <Text className="text-white" style={{ fontSize: getFontSize(15) }}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`${
            activeIndex === 1
              ? "border-[#6600e8] border-b-[3px] py-[8px] mx-[16px]"
              : "bg-transparent mx-[16px]"
          }`}
          onPress={() => handleIndexChange(1)}
        >
          <Text className="text-white" style={{ fontSize: getFontSize(15) }}>
            Feed
          </Text>
        </TouchableOpacity>
      </View>

      <View className="h-[100vh]">
        <Swiper
          showsButtons={false}
          loop={false}
          ref={swiperRef}
          onIndexChanged={(index) => {
            handleSwiperIndexChange(index);
          }}
          pagination={false}
        >
          <View className="m-[16px] p-[16px] mb-[250px] bg-[#292929] rounded-[10px]">
            <Text
              className="text-white font-semibold"
              style={{ fontSize: getFontSize(25) }}
            >
              Sales
            </Text>
            <View className="mt-[16px]">
              <Text className="text-white">Total Amount</Text>
              <Text
                className="text-white font-semibold"
                style={{ fontSize: getFontSize(25) }}
              >
                NGN90,000
              </Text>
            </View>
            <View className="mt-[16px]">
              <Text className="text-white">Total Sales</Text>
              <Text
                className="text-white font-semibold"
                style={{ fontSize: getFontSize(25) }}
              >
                90
              </Text>
            </View>
          </View>
          <View className="mb-[250px]">
            <Text>Feed</Text>
          </View>
        </Swiper>
        <Animated.View />
      </View>
    </View>
  );
}

export default Profile;
