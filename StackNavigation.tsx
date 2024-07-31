import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RecipeScreen from "./src/screens/RecipeScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="recipe"
          component={RecipeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
