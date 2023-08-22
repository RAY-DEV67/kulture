import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  PixelRatio,
  TouchableOpacity,
} from "react-native";

function Search({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  return (
    <View className="bg-[#1c1c1c] h-[100vh] pt-[32px] px-[16px]">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search beat, Artist"
          placeholderTextColor="white"
          className="border border-white my-[12px] p-[8px] rounded-[8px] w-[80vw]"
        />
      </View>
      <View className="mt-[16px]">
        <Text
          className="text-white font-semibold"
          style={{ fontSize: getFontSize(25) }}
        >
          Recently Searched
        </Text>
      </View>
    </View>
  );
}

export default Search;
