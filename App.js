import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingOne"
          component={OnboardingOne}
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
          name="Home"
          component={Home}
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
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}
