import Swiper from "react-native-swiper";
import {
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  Image,
  Animated,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useRef, useState, useEffect } from "react";
import { UserId, UserType } from "../App";
import axios from "axios";
import YourBeatsCard from "../components/yourBeatsCard";

function Profile({ navigation }) {
  const userId = useContext(UserId);
  const userType = useContext(UserType);

  const [fetched, setfetched] = useState(false);
  const [user, setuser] = useState([]);
  const [userName, setuserName] = useState("");
  const [revenue, setrevenue] = useState();
  const [sales, setsales] = useState();
  const [myBeats, setmyBeats] = useState([]);
  const [loading, setloading] = useState();

  console.log(userType);

  const fetchUserData = async () => {
    setloading(true);
    try {
      const response = await axios.get(
        `https://kulture-api.onrender.com/api/v1/${userType}s/${userId}`
      );
      console.log(response.data.data);
      {
        userType == "producer"
          ? setrevenue(response.data.data.attributes.total_revenue)
          : setrevenue(response.data.data.attributes.total_amount_spent);
      }
      {
        userType == "producer"
          ? setsales(response.data.data.attributes.total_sales)
          : setsales(response.data.data.attributes.total_beats_purchased);
      }
      {
        userType == "producer"
          ? setmyBeats(response.data.data.uploaded_beats)
          : setmyBeats(response.data.data.purchased_beats);
      }
      setuserName(response.data.data.data.username);
      setfetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [fetched]);

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

      <ImageBackground
        source={require("../assets/bg.png")}
        className="m-[16px] p-[16px] flex-row items-center rounded-[10px]"
      >
        <Image
          source={require("../assets/noProfile.jpg")}
          className="w-[30vw] rounded-full object-contain h-[30vw] mr-[8px]"
        />
        <View className="ml-[16px]">
          <View className="bg-[#1c1c1c] p-[16px]  rounded-[10px]">
            <Text
              className=" text-white text-center"
              style={{ fontSize: getFontSize(20) }}
            >
              {userName}
            </Text>
          </View>
          {userType == "producer" && (
            <TouchableOpacity
              onPress={() => navigation.navigate("UploadOne")}
              className="bg-[#6600e8] p-[16px] mt-[8px] rounded-[10px]"
            >
              <Text
                className="text-white text-center font-semibold"
                style={{ fontSize: getFontSize(15) }}
              >
                Upload Beat
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>

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
            My Beats
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
              {userType == "producer" ? "Sales" : "Purchase"}
            </Text>
            <View className="mt-[16px]">
              <Text className="text-white">Total Amount</Text>
              <Text
                className="text-white font-semibold"
                style={{ fontSize: getFontSize(25) }}
              >
                NGN {revenue}
              </Text>
            </View>
            <View className="mt-[16px]">
              {userType == "producer" ? (
                <Text className="text-white">Total Sales</Text>
              ) : (
                <Text className="text-white">Total Purchase</Text>
              )}
              <Text
                className="text-white font-semibold"
                style={{ fontSize: getFontSize(25) }}
              >
                {sales}
              </Text>
            </View>
          </View>
          <ScrollView className="mb-[250px] mx-[16px]">
            {myBeats.length === 0 && (
              <Text
                className="text-white text-center mt-[32px]"
                style={{ fontSize: getFontSize(20) }}
              >
                {userType == "producer"
                  ? "You have not uploaded any beat"
                  : "You have not purchased any beat"}
              </Text>
            )}

            {myBeats?.map((items, index) => (
              <View key={index}>
                <YourBeatsCard
                  beats={items}
                  key={index}
                  navigation={navigation}
                />
              </View>
            ))}
          </ScrollView>
        </Swiper>
        <Animated.View />
      </View>
    </View>
  );
}

export default Profile;
