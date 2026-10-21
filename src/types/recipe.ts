export type Ingredient = {
  id: string;
  quantity: string;
  name: string;
};

export type Step = {
  stepNumber: string;
  title: string;
  description: string;
};

export type Recipe = {
  id: string;
  slug: string;
  title: string;
  category:
    | "quick-meals"
    | "plant-based"
    | "baking-grains"
    | "soups-stews"
    | "indian-classics"
    | "street-food"
    | "non-vegetarian"
    | "international"
    | "breakfast"
    | "desserts";
  categoryLabel: string;
  cuisine: string;
  prepTime: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  servings: string;
  description: string;
  image: string;
  tag: string;
  entryNumber?: string;
  yieldInfo: string;
  ingredients: Ingredient[];
  steps: Step[];
};

export type Cuisine = {
  id: string;
  name: string;
  recipeCount: number;
  description: string;
  focus: string;
  focusLabel: string;
};
