import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";
import React, { useState } from "react";

const Genre = [
  "Afro Drill",
  "Afro",
  "Alte",
  "Afro Trap",
  "World",
  "Fuji Fusion",
  "Hip Hop/ Rap",
];

function CustomDropdown({ options, selectedValue, onSelect }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "white",
          marginTop: 16,
          padding: 8,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>
          {selectedValue || "Choose Genre"}
        </Text>
        <AntDesign
          name={modalVisible ? "up" : "down"}
          size={24}
          color="white"
        />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          className="pt-[75vh] flex-col items-center justify-end w-[100vw]"
          onPress={() => setModalVisible(false)}
        >
          <View className="bg-[#1c1c1c] border-t border-white h-[40vh] w-[100vw]">
            <Text className="bg-gray-400 p-[16] text-white font-semibold">
              Choose a Genre
            </Text>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onSelect(item);
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text className="w-[100vw] px-[16px] py-[8px] text-white">
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

function UploadThree({ navigation }) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // To control dropdown visibility

  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  const handleGenreSelect = (index, value) => {
    setSelectedGenre(value);
    setShowDropdown(false); // Close the dropdown after selection
  };
  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[32px] px-[16px]">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UploadTwo");
        }}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text
        className="text-white font-semibold my-[24px]"
        style={{ fontSize: getFontSize(20) }}
      >
        Upload your beats to Kulture
      </Text>

      <View>
        <View className="flex-row justify-between items-end">
          <TouchableOpacity className="px-[32px] h-[15vh] flex-col items-center justify-center rounded-[8px] border border-white">
            <View className="flex-row bg-white p-[8px] rounded-[10px]">
              <Feather name="camera" size={24} color="black" />
              <Text className="ml-[16px]">Upload Image</Text>
            </View>
            <Text className="text-white mt-[16px]">Max.File Size: 500 MB</Text>
          </TouchableOpacity>

          <View>
            <Text className="text-white">Price</Text>
            <TextInput
              placeholder="NGN8000000"
              placeholderTextColor="white"
              className="border text-white border-white mt-[12px] p-[8px] rounded-[8px]"
            />
          </View>
        </View>

        <Text className="mt-[32px] text-white">Producer(s)</Text>
        <TextInput
          placeholder="eg. Elebor Henry"
          placeholderTextColor="white"
          className="border text-white border-white mt-[12px] p-[8px] rounded-[8px]"
        />

        <Text className="mt-[16px] text-white">Name of Beat</Text>
        <TextInput
          placeholder="eg. Beats by Henry"
          placeholderTextColor="white"
          className="border text-white border-white mt-[12px] p-[8px] rounded-[8px]"
        />

        <Text className="mt-[16px] text-white">Genre</Text>
        <CustomDropdown
          options={Genre}
          selectedValue={selectedGenre}
          onSelect={setSelectedGenre}
        />
      </View>
      <TouchableOpacity
        className="bg-[#6600e8] py-[16px] rounded-[10px] mt-[50px]"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text className="text-center text-white">Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UploadThree;
