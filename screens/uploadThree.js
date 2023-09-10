import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  TextInput,
  FlatList,
  Modal,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import { AccessToken } from "../App";
import Spinner from "../components/spinner";
import Toast from "react-native-toast-message";

const Genre = [
  "Hip-Hop/Rap",
  "Afro Drill",
  "Fuji Fusion",
  "Afro Trap",
  "Afro Pop",
  // "Fuji Fusion",
  // "Hip Hop",
];

const License = ["standard", "premium"];

function CustomDropdown({ options, selectedValue, onSelect,type }) {
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
          {selectedValue || `Choose ${type}`}
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
              Choose a {type}
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

function UploadThree({ navigation, route }) {
  const { selectedAudio } = route.params;
  const accessToken = useContext(AccessToken);

  const [selectedImage, setSelectedImage] = useState(null);
  const [beatName, setBeatName] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // To control dropdown visibility
  const [availableCopies, setavailableCopies] = useState();
  const [licenseType, setlicenseType] = useState();
  const [loading, setloading] = useState(false);

  const pickImage = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });
      setSelectedImage(result.assets[0].uri);
    } catch (err) {
      console.error("Error picking image:", err);
    }
  };

  const uploadBeat = async () => {
    setloading(true);
    try {
      const formData = new FormData();
      formData.append("name", beatName);
      formData.append("price", price);
      formData.append("genre", selectedGenre);
      formData.append("license_type", licenseType);
      formData.append("available_copies", availableCopies);

      // Add image file
      formData.append("image", {
        uri: selectedImage, // Update with the actual file path
        type: "image/jpeg", // Adjust the content type as needed
        name: "album.jpeg", // Provide the desired file name
      });

      // Add audio file
      formData.append("audio", {
        uri: selectedAudio, // Update with the actual file path
        type: "audio/mpeg", // Adjust the content type as needed
        name: "orchestral.mp3", // Provide the desired file name
      });

      const headers = { Authorization: `Bearer ${accessToken}` };
      const apiEndpoint =
        "https://kulture-api.onrender.com/api/v1/beats/upload";
      const response = await axios.post(apiEndpoint, formData, { headers });
      console.log(response?.data);
      Toast.show({
        type: "success", // Toast type (success, error, info)
        position: "top", // Position of the toast (top, bottom)
        text1: `Successful🙌`, // Main text
        text2: `Beat Uploaded succesfully🎉`, // Subtext or additional information
        visibilityTime: 3000, // Duration the toast should be visible (in milliseconds)
        autoHide: true, // Hide the toast automatically after `visibilityTime`
        topOffset: 50, // Customize the position from the top (in pixels)
        bottomOffset: 40, // Customize the position from the bottom (in pixels)
      });
      setloading(false);
    } catch (error) {
      // Handle error response
      console.log(error.response?.data);
    }
  };

  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  const handleGenreSelect = (index, value) => {
    setSelectedGenre(value);
    setShowDropdown(false); // Close the dropdown after selection
  };

  return (
    <ScrollView className="bg-[#1c1c1c] h-[100vh] pt-[32px] px-[16px]">
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
          <TouchableOpacity
            onPress={pickImage}
            className="px-[32px] h-[15vh] flex-col items-center justify-center rounded-[8px] border border-white"
          >
            <View className="flex-row bg-white p-[8px] items-center rounded-[10px]">
              <Feather name="camera" size={24} color="black" />
              <Text className="ml-[16px]">Upload Image</Text>
            </View>
            <Text className="text-white mt-[16px]">Max.File Size: 500 MB</Text>
          </TouchableOpacity>

          <View>
            <Text className="text-white">Price</Text>
            <TextInput
              onChangeText={(text) => setPrice(text)}
              placeholder="NGN8000000"
              placeholderTextColor="white"
              className="border text-white border-white mt-[12px] px-[8px] py-[16px] rounded-[8px]"
            />
          </View>
        </View>

        <Text className="mt-[32px] text-white">Producer(s)</Text>
        <TextInput
          placeholder="eg. Elebor Henry"
          placeholderTextColor="white"
          className="border text-white border-white mt-[12px] px-[8px] py-[16px] rounded-[8px]"
        />

        <Text className="mt-[16px] text-white">Name of Beat</Text>
        <TextInput
          onChangeText={(text) => setBeatName(text)}
          placeholder="eg. Beats by Henry"
          placeholderTextColor="white"
          className="border text-white border-white mt-[12px] px-[8px] py-[16px] rounded-[8px]"
        />

        <Text className="mt-[16px] text-white">License</Text>
        <CustomDropdown
          options={License}
          selectedValue={licenseType}
          onSelect={setlicenseType}
          type="License"
        />

        <Text className="mt-[16px] text-white">Available Copies</Text>
        <TextInput
          onChangeText={(text) => setavailableCopies(text)}
          placeholder="eg. Beats by Henry"
          placeholderTextColor="white"
          className="border text-white border-white mt-[12px] px-[8px] py-[16px] rounded-[8px]"
        />

        <Text className="mt-[16px] text-white">Genre</Text>
        <CustomDropdown
          options={Genre}
          selectedValue={selectedGenre}
          onSelect={setSelectedGenre}
          type="Genre"
        />
      </View>
      <TouchableOpacity
        className="bg-[#6600e8] py-[16px] rounded-[10px] my-[50px]"
        onPress={uploadBeat}
      >
        {loading ? (
          <Spinner
            visible={loading}
            textContent={"Loading..."}
            textStyle={{ color: "#FFF" }}
          />
        ) : (
          <Text className="text-center text-white">Submit</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

export default UploadThree;
