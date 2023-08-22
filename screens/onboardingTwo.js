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
  
  export default function OnboardingTwo({ navigation }) {
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
            <Text style={{ fontSize: getFontSize(25) }} className="text-white font-semibold">
              Download Beats
            </Text>
            <Text style={{ fontSize: getFontSize(15) }} className="text-white">
             Artists globally can download and listen to any beats of genre of their choice.
            </Text>
          </View>
          <View className="flex-row justify-between w-[90vw] mt-[52px]">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
              className="border py-[8px] px-[16px] border-[#6600e8]"
            >
              <Text className="text-white">Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OnboardingThree");
              }}
              className="border py-[8px] px-[16px] bg-[#6600e8] border-[#6600e8]"
            >
              <Text className="text-white">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }