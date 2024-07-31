import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import Category from "../../components/Category";
import { FetchData, SearchData } from "../../services/fetch";
import { FindProps, RecipeList, RootStackParamList } from "../../type";
import MasonryList from "@react-native-seoul/masonry-list";
import RecipeCard from "../../components/RecipeCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SearchOption from "../../components/SearchOption";
import useDebounce from "../../hooks/usedebounce";

export type HomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "home"
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenProps>();
  const [category, setCategory] = useState<string>("soup");
  const [data, setData] = useState<RecipeList[]>([]);
  const [meal, setMeal] = useState<number | null>(null);
  const [find, setFind] = useState<string>("");
  const [option, setOption] = useState<FindProps[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const debouncedFind = useDebounce<string>(find, 500);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FetchData({ setEndPoint: category });
        if (Array.isArray(res)) {
          setData(res);
        } else {
          console.error("Unexpected response format:", res);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    const getData = async () => {
      if (debouncedFind) {
        const response = await SearchData({ search: debouncedFind });
        setOption(response);
        //console.log(response);

        setShowOptions(true);
      } else {
        setOption([]);
        setShowOptions(false);
      }
    };
    getData();
  }, [debouncedFind]);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setShowOptions(false);
          Keyboard.dismiss();
        }}
      >
        <ScrollView>
          <StatusBar
            translucent={false}
            style="dark"
            backgroundColor="#f57b01"
          />

          <View className="pt-4 pl-3">
            <Text className="text-3xl font-semibold">Cook Up</Text>
            <Text className="text-3xl font-extrabold">
              Your Next Favorite Dish!
            </Text>
          </View>

          <View className="relative">
            <View className="mt-4 border-2 border-gray-400 rounded-full flex-row space-x-3 mx-3 p-3">
              <FontAwesome name="search" size={22} color="black" />
              <TextInput
                placeholder="Search"
                className="text-xl w-[90%]"
                onChangeText={(text) => setFind(text)}
                onFocus={() => setShowOptions(true)}
              />
            </View>
            {showOptions && (
              <SearchOption
                option={option}
                navigation={navigation}
                setShowOptions={setShowOptions}
              />
            )}
          </View>

          <Category category={category} setCategory={setCategory} />

          <View className="mt-4">
            {Array.isArray(data) ? (
              <MasonryList
                data={data}
                renderItem={({ item, i }: { item: unknown; i: number }) => {
                  const recipe = item as RecipeList;
                  return (
                    <RecipeCard
                      index={i}
                      recipe={recipe}
                      setMeal={setMeal}
                      meal={meal}
                      navigation={navigation}
                    />
                  );
                }}
                numColumns={2}
              />
            ) : (
              <Text>No data available</Text>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
}
