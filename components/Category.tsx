import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categoryData } from "../CategoriesData";
import { CategoryList, CategoryListDetail } from "../type";

export default function Category({
  category,
  setCategory,
}: CategoryListDetail) {
  const [active, setActive] = useState<number>(5);

  return (
    <View className="mt-5 pl-3">
      <Text className="text-xl mb-1 font-semibold">Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-3"
      >
        {categoryData.map((item: CategoryList, index) => {
          const isactive = active === index;
          const activeTitle = isactive
            ? "bg-orange-500 text-white"
            : "bg-gray-300";
          return (
            <TouchableOpacity
              key={index}
              className="items-center p-2 "
              onPress={() => {
                setActive(index);
                setCategory(item.title);
              }}
            >
              <View
                className={
                  isactive
                    ? "bg-orange-500 rounded-full p-1"
                    : "bg-slate-300 rounded-full p-1"
                }
              >
                <Image source={item.image} className="w-10 h-10" />
              </View>
              <Text
                className={
                  " mt-1 p-2 text-sm tracking-wide font-medium rounded " +
                  activeTitle
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
