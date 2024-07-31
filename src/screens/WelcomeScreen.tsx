import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type";

export default function WelcomeScreen() {
  type welcomeScreenProps = NativeStackNavigationProp<
    RootStackParamList,
    "welcome"
  >;

  const navigation = useNavigation<welcomeScreenProps>();
  const animation = useRef(null);
  return (
    <View className="flex-1 justify-center items-center bg-orange-400">
      <StatusBar translucent={false} barStyle={"light-content"} />
      <LottieView
        autoPlay
        ref={animation}
        style={{
          height: 300,
          width: 300,
        }}
        source={require("../../assets/lottie/logo.json")}
      />
      <TouchableOpacity onPress={() => navigation.replace("home")}>
        <Text className="p-5 bg-white rounded-full font-semibold">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
