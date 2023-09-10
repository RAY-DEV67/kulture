import { View, Image, Text, PixelRatio, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import PopularBeatsCard from "../components/popularBeatsCard";
import FeedCard from "../components/feedCard";
import Spinner from "../components/spinner";

const BASE_URL = "https://kulture-api.onrender.com/api/v1";

function Home({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  const [popularBeats, setpopularBeats] = useState([]);
  const [loading, setloading] = useState(false);
  const [fetched, setfetched] = useState(false);
  const [allBeats, setallBeats] = useState([]);

  const fetchData = async () => {
    setloading(true);
    try {
      const response = await fetch(
        "https://kulture-api.onrender.com/api/v1/trending/beats"
      );
      const data = await response.json();
      setpopularBeats(data.data.data);
      setfetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setloading(false);
    }
  };

  const fetchAllData = async () => {
    setloading(true);
    try {
      const response = await fetch(
        "https://kulture-api.onrender.com/api/v1/beats"
      );
      const data = await response.json();
      setallBeats(data.data.data);
      setfetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
    fetchData();
  }, [fetched]);

  return (
    <ScrollView className="bg-[#1c1c1c] pt-[32px] px-[16px]">
      <View className="flex-row justify-between items-center mb-[32px]">
        <Image
          source={require("../assets/logo.png")}
          className="w-[30vw] h-[10vw] mt-[16px] rounded-full object-contain"
        />
        <View className="flex-row items-center">
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
          <Image
            source={require("../assets/noProfile.jpg")}
            className="w-[10vw] h-[10vw] rounded-full object-contain"
          />
        </View>
      </View>

      <View>
        <Text
          className="text-white font-semibold"
          style={{ fontSize: getFontSize(25) }}
        >
          Popular Uploads
        </Text>
        {loading && <Spinner />}
        <View className="flex-row gap-3 mt-[16px] ">
          <View className="w-[45vw] my-[16px]">
            {popularBeats[0] ? (
              <PopularBeatsCard beats={popularBeats[0]} />
            ) : null}
          </View>
          <View className="w-[45vw] my-[16px]">
            {popularBeats[1] ? (
              <PopularBeatsCard beats={popularBeats[1]} />
            ) : null}
          </View>
        </View>
        <View className="flex-row gap-3">
          <View className=" w-[45vw] my-[16px]">
            {popularBeats[2] ? (
              <PopularBeatsCard beats={popularBeats[2]} />
            ) : null}
          </View>
          <View className="w-[45vw] my-[16px]">
            {popularBeats[3] ? (
              <PopularBeatsCard beats={popularBeats[3]} />
            ) : null}
          </View>
        </View>
        <View className="w-[45vw] my-[16px]">
          {popularBeats[4] ? (
            <PopularBeatsCard beats={popularBeats[4]} />
          ) : null}
        </View>
      </View>

      <View className="mt-[16px] mb-[100px]">
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
          <View className="border bg-[#434343] border-white w-[10vw] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">All</Text>
          </View>

          <View className="border bg-[#434343] border-white w-[20vw] mx-[16px] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">Afro beats</Text>
          </View>

          <View className="border bg-[#434343] border-white w-[15vw] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">World</Text>
          </View>

          <View className="border bg-[#434343] border-white w-[10vw] mx-[16px] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">Fuji</Text>
          </View>

          <View className="border bg-[#434343] border-white w-[10vw] rounded-[8px] py-[4px]">
            <Text className="text-white text-center">Juju</Text>
          </View>
        </View>

        {loading && <Spinner />}
        {allBeats?.map((items, index) => (
          <View key={index}>
            <FeedCard beats={items} navigation={navigation} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default Home;
