import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  PixelRatio,
} from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function OnboardingThree({ navigation }) {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;

  return (
    <View>
      <View
        className={`bg-[#1c1c1c] flex-col items-center justify-center h-[100vh] px-[16px]`}
      >
        {/* <View>
            <Image
            //   source={require("../../assets/onboardingOne.png")}
            />
          </View> */}

        <Text>Image</Text>
        <View>
          <Text
            style={{ fontSize: getFontSize(25) }}
            className="text-white font-semibold"
          >
            Sell Beats & Connect with Artists
          </Text>
          <Text style={{ fontSize: getFontSize(15) }} className="text-white">
            Connect with artists globally looking to buy all genres of beats
          </Text>
        </View>
        <View className="flex-row justify-between w-[90vw] mt-[52px]">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
            className="border w-[90vw] py-[16px] border-[#6600e8] bg-[#6600e8] rounded-[10px]"
          >
            <Text className="text-white text-center">Get Started</Text>
          
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
