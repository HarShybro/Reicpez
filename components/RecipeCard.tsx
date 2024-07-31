import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { RecipeList, RootStackParamList } from "../type";
import { RecipeData } from "../services/fetch";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RecipeCardProps = {
  index: number;
  recipe: RecipeList;
  setMeal: React.Dispatch<React.SetStateAction<number | null>>;
  meal: unknown;
  navigation: NativeStackNavigationProp<RootStackParamList, "home">;
};

export default function RecipeCard({
  index,
  recipe,
  meal,
  setMeal,
  navigation,
}: RecipeCardProps) {
  let isEven = index % 2 == 0;
  const newTitle =
    recipe.title.length > 22
      ? recipe.title.substring(0, 22) + "..."
      : recipe.title;
  return (
    <View key={index}>
      <Pressable
        style={{ width: 160, paddingRight: isEven ? 8 : 0 }}
        className="flex justify-center mb-4 ml-3 space-y-1 relative"
        onPress={() => {
          console.log("Press");
          setMeal(recipe.id);

          navigation.navigate("recipe", { meal: recipe.id });
        }}
      >
        <Image
          source={{ uri: recipe.image }}
          style={{
            width: 160,
            height: index % 5 == 0 ? 240 : 180,
            borderRadius: 20,
          }}
          resizeMode="stretch"
          className="bg-black/5 relative"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <Text className="absolute bottom-2 text-white left-2 font-bold text-lg w-[90%]">
          {newTitle}
        </Text>
      </Pressable>
    </View>
  );
}
