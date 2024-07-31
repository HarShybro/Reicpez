export type RootStackParamList = {
  welcome: undefined;
  home: undefined;
  recipe: { meal: number };
};

export type CategoryList = {
  title: string;
  image: undefined;
};

export type FetchList = {
  setEndPoint: string;
};

export type CategoryListDetail = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type RecipeList = {
  id: number;
  title: string;
  image: string;
};

interface Measure {
  amount: number;
  unitShort: string;
  unitLong: string;
}

interface Measures {
  us: Measure;
  metric: Measure;
}

interface Ingredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Measures;
}

export interface Recipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: Ingredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: any[];
  originalId: number | null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

export type SearchProps = {
  id: number;
  title: string;
};

export type FindProps = {
  id: number;
  title: string;
};
