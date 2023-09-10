import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import { CartedBeats, Onboarded, UserType } from "../App";

function Navbar({}) {
  const { cart } = useContext(CartedBeats);
  const [screen, setscreen] = useState("Home");
  const navigation = useNavigation();
  const { onboarded } = useContext(Onboarded);
  const userType = useContext(UserType);

  if (onboarded) {
    return (
      <View className="flex-row justify-between items-center px-[32px] pb-[20px] pt-[16px] border-t-[0.2px] border-white bg-[#1c1c1c]">
        <TouchableOpacity
          className={`flex-col items-center ${
            screen === "Home" ? "bg-[#ceb0f3] p-[10px] rounded-[8px]" : ""
          }`}
          onPress={() => {
            setscreen("Home");
            navigation.navigate("AfterHome", { screen: "AfterHome" });
          }}
        >
          <Octicons
            name="home"
            size={20}
            color={screen === "Home" ? "#6600e8" : "white"}
          />
          {screen !== "Home" && (
            <Text className="text-white text-[12px] mt-[4px]">Home</Text>
          )}
        </TouchableOpacity>
        {userType == "producer" && (
          <TouchableOpacity
            className={`flex-col items-center ${
              screen === "Upload" ? "bg-[#ceb0f3] p-[10px] rounded-[8px]" : ""
            }`}
            onPress={() => {
              setscreen("Upload");
              navigation.navigate("UploadOne");
            }}
          >
            <MaterialIcons
              name="upload-file"
              size={20}
              color={screen === "Upload" ? "#6600e8" : "white"}
            />
            {screen !== "Upload" && (
              <Text className="text-white text-[12px] mt-[4px]">Upload</Text>
            )}
          </TouchableOpacity>
        )}
        <TouchableOpacity
          className={`flex-col items-center ${
            screen === "Cart" ? "bg-[#ceb0f3] p-[10px] rounded-[8px]" : ""
          }`}
          onPress={() => {
            setscreen("Cart");
            navigation.navigate("Cart");
          }}
        >
          <FontAwesome
            name="opencart"
            size={20}
            color={screen === "Cart" ? "#6600e8" : "white"}
          />
          {screen !== "Cart" && (
            <Text className="text-white text-[12px] mt-[4px]">Cart</Text>
          )}
          <View className="bg-[#6600e8] w-[15px] h-[15px] rounded-[50px] flex-row items-center justify-center absolute top-[-10px] left-5">
            <Text className="text-white text-[12px]">{cart?.length}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-col items-center ${
            screen === "Option" ? "bg-[#ceb0f3] p-[10px] rounded-[8px]" : ""
          }`}
          onPress={() => {
            setscreen("Option");
            navigation.navigate("Options");
          }}
        >
          <Fontisto
            name="nav-icon-a"
            size={20}
            color={screen === "Option" ? "#6600e8" : "white"}
          />
          {screen !== "Option" && (
            <Text className="text-white text-[12px] mt-[4px]">Option</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default React.memo(Navbar);
