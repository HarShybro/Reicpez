import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList, Recipe } from "../../type";
import { RecipeData } from "../../services/fetch";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

type RecipeScreenRouteProp = RouteProp<RootStackParamList, "recipe">;
export default function RecipeScreen() {
  const navigation = useNavigation();
  const route = useRoute<RecipeScreenRouteProp>();
  const { meal } = route.params;
  const [result, setResult] = useState<Recipe | null>();

  useEffect(() => {
    const getFetch = async () => {
      const res = await RecipeData({ meal: meal });

      setResult(res);
    };
    getFetch();
  }, []);
  return (
    <ScrollView>
      <StatusBar translucent={true} style="inverted" />
      <View className="relative">
        <Image
          source={{ uri: result?.image }}
          className="w-[100%] h-72 rounded-b-3xl"
          resizeMode="stretch"
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 30, left: 5, zIndex: 10 }}
        >
          <Ionicons name="caret-back-circle" size={52} color="white" />
        </TouchableOpacity>
      </View>
      <View className="px-4">
        <Text className="font-extrabold text-3xl">{result?.title}</Text>
        <Text className="font-bold text-2xl">Ingredients</Text>
        {result?.extendedIngredients.map((item, index) => {
          return (
            <View className="pl-2 flex-row items-center" key={index}>
              <Text>⭕ </Text>
              <Text className="text-xl">{item.original}</Text>
            </View>
          );
        })}
        <Text className="font-bold text-2xl mt-2">Instructions</Text>
        <Text className="text-xl">
          {result?.instructions
            .replaceAll("<ol>", "")
            .replaceAll("</li>", "\n")
            .replaceAll("<li>", "🔴 ")
            .replaceAll("</ol>", " ")
            .replaceAll("<p>", "")
            .replaceAll("</p>", "")}
        </Text>
      </View>
    </ScrollView>
  );
}
