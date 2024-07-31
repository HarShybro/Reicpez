import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import React, { LegacyRef, MutableRefObject } from "react";
import { FindProps, RootStackParamList } from "../type";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function SearchOption({
  option,
  navigation,
  setShowOptions,
}: {
  option: FindProps[];
  navigation: NativeStackNavigationProp<RootStackParamList, "home">;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <View className="absolute top-20 left-5 z-20 bg-slate-200 w-[90%]  rounded-t-lg border rounded-b-lg">
      {option.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="border-b-orange-300 border-b py-2 z-50 pointer-events-auto px-2 "
          onPress={() => {
            setShowOptions(true);
            console.log(item.id);
            navigation.navigate("recipe", { meal: item.id });
          }}
        >
          <Text className="text-gray-700 font-bold text-base">
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
