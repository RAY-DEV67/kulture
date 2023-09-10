import Toast from "react-native-toast-message";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import OnboardingOne from "./screens/onboardingOne";
import OnboardingTwo from "./screens/onboardingTwo";
import OnboardingThree from "./screens/onboardingThree";
import SignUp from "./screens/signUp";
import Login from "./screens/login";
import ForgotPassword from "./screens/forgotPassword";
import ForgotPasswordSuccess from "./screens/forgotPasswordSuccess";
import Navbar from "./components/navbar";
import Search from "./screens/search";
import Notifications from "./screens/notifiications";
import UploadOne from "./screens/uploadOne";
import UploadTwo from "./screens/uploadTwo";
import UploadThree from "./screens/uploadThree";
import Options from "./screens/options";
import AccountSettings from "./screens/accountSettings";
import EditProfileInformation from "./screens/editProfileInformation";
import BillingAddress from "./screens/billingAddress";
import AddBillingAddress from "./screens/addBillingAddress";
import PaymentAccount from "./screens/paymentAccount";
import AddAccount from "./screens/addAccount";
import SocialMedia from "./screens/socialMedia";
import Profile from "./screens/profile";
import Cart from "./screens/cart";
import SavedItems from "./screens/saved";
import MyUploads from "./screens/myUploads";
import MyOrders from "./screens/myOrders";
import ChooseLicense from "./screens/chooseLicense";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext } from "react";

const Stack = createStackNavigator();

export const UserId = createContext();
export const SetUserLogged = createContext();
export const UserLogged = createContext();
export const AccessToken = createContext();
export const Onboarded = createContext();
export const CartedBeats = createContext();
export const UserType = createContext();

export default function App() {
  const [userId, setuserId] = useState("");
  const [accessToken, setaccessToken] = useState();
  const [onboarded, setonboarded] = useState();
  const [loading, setloading] = useState(true);
  const [userLogged, setuserLogged] = useState();
  const [cart, setcart] = useState([]);
  const [userType, setuserType] = useState();

  const getUserData = async () => {
    setloading(true);
    try {
      const userData = await AsyncStorage.getItem("userData");
      const accessToken = await AsyncStorage.getItem("accessToken");
      const onboarded = await AsyncStorage.getItem("onboarded");
      const savedCart = await AsyncStorage.getItem("cart");
      const userType = await AsyncStorage.getItem("userType");

      if (userData) {
        const parsedUserData = JSON.parse(userData);
        const parsedAccessToken = JSON.parse(accessToken);
        const parsedUserType = JSON.parse(userType);
        setaccessToken(parsedAccessToken);
        setuserId(parsedUserData);
        setonboarded(onboarded === "true");
        setuserType(parsedUserType);
      }

      if (cart) {
        setcart(JSON.parse(savedCart));
      }

      setloading(false);
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Onboarded.Provider value={{ onboarded, setonboarded }}>
      <CartedBeats.Provider value={{ cart, setcart }}>
        <UserId.Provider value={userId}>
          <AccessToken.Provider value={accessToken}>
            <UserType.Provider value={userType}>
              <NavigationContainer>
                <Stack.Navigator>
                  {onboarded ? (
                    <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{ headerShown: false }}
                    />
                  ) : (
                    <Stack.Screen
                      name="OnboardingOne"
                      component={OnboardingOne}
                      options={{ headerShown: false }}
                    />
                  )}
                  <Stack.Screen
                    name="AfterHome"
                    component={Home}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="OnboardingTwo"
                    component={OnboardingTwo}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="OnboardingThree"
                    component={OnboardingThree}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ForgotPasswordSuccess"
                    component={ForgotPasswordSuccess}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="UploadOne"
                    component={UploadOne}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="UploadTwo"
                    component={UploadTwo}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="UploadThree"
                    component={UploadThree}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Options"
                    component={Options}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="AccountSettings"
                    component={AccountSettings}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="EditProfileInformation"
                    component={EditProfileInformation}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="BillingAddress"
                    component={BillingAddress}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="AddBillingAddress"
                    component={AddBillingAddress}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="PaymentAccount"
                    component={PaymentAccount}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="AddAccount"
                    component={AddAccount}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SocialMedia"
                    component={SocialMedia}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Saved"
                    component={SavedItems}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="MyUploads"
                    component={MyUploads}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="MyOrders"
                    component={MyOrders}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ChooseLicense"
                    component={ChooseLicense}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
                <Navbar />
                <Toast />
              </NavigationContainer>
            </UserType.Provider>
          </AccessToken.Provider>
        </UserId.Provider>
      </CartedBeats.Provider>
    </Onboarded.Provider>
  );
}
