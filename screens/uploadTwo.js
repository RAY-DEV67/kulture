import { AntDesign } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, PixelRatio } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function UploadTwo({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[32px] px-[16px]">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UploadOne");
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
        <TouchableOpacity className="bg-[#434343] px-[32px] h-[40vh] flex-col items-center justify-center rounded-[8px] border border-white">
          <AntDesign name="clouddownload" size={140} color="gray" />
          <Text>Browse for files or drag and drop them here</Text>
          <Text>Max. File Size: 500MB</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-[#6600e8] py-[16px] rounded-[10px] mt-[50px]"
        onPress={() => {
          navigation.navigate("UploadThree");
        }}
      >
        <Text className="text-center text-white">Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UploadTwo;
