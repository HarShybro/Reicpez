import axios from "axios";
import { FetchList, Recipe, RecipeList, SearchProps } from "../type";

export const axiosinstance = axios.create({
  baseURL: "https://api.spoonacular.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const FetchData = async ({
  setEndPoint,
}: FetchList): Promise<RecipeList[]> => {
  try {
    const response = await axiosinstance.get(
      `recipes/complexSearch?query=${setEndPoint}&number=10&apiKey=eb95521b89bc414284d666018f51be00`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const RecipeData = async ({
  meal,
}: {
  meal: number;
}): Promise<Recipe> => {
  try {
    const response = await axiosinstance.get(
      `recipes/${meal}/information?apiKey=eb95521b89bc414284d666018f51be00`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//api.spoonacular.com/recipes/autocomplete?number=10&query=chick

export const SearchData = async ({
  search,
}: {
  search: string;
}): Promise<SearchProps[]> => {
  try {
    const response = await axiosinstance.get(
      `recipes/autocomplete?number=10&query=${search}&apiKey=eb95521b89bc414284d666018f51be00`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
