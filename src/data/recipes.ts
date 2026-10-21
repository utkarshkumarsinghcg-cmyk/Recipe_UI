
import { Recipe } from "@/types/recipe";

export const recipesData: Recipe[] = [
  {
    id: "14",
    slug: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    category: "indian-classics",
    categoryLabel: "Indian Classics",
    cuisine: "North Indian",
    prepTime: "35 mins",
    difficulty: "Medium",
    servings: "4 servings",
    description: "Soft paneer cubes simmered in a rich tomato gravy finished with butter, cream, and aromatic Indian spices.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    tag: "Indian Favorite",
    entryNumber: "Entry #014 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "p1", quantity: "400g", name: "paneer, cubed" },
      { id: "p2", quantity: "3 large", name: "ripe tomatoes" },
      { id: "p3", quantity: "2 tbsp", name: "butter" },
      { id: "p4", quantity: "100ml", name: "fresh cream" },
      { id: "p5", quantity: "1 tsp", name: "garam masala" },
      { id: "p6", quantity: "1 tbsp", name: "ginger-garlic paste" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Prepare the Gravy",
        description: "Cook tomatoes, ginger-garlic paste, and spices until soft. Blend into a smooth puree."
      },
      {
        stepNumber: "02",
        title: "Simmer the Sauce",
        description: "Heat butter in a pan, add the puree, and simmer for 10 minutes."
      },
      {
        stepNumber: "03",
        title: "Finish with Paneer",
        description: "Add paneer and cream, simmer gently for 5 minutes, and serve with naan."
      }
    ]
  },
  {
    id: "15",
    slug: "vegetable-biryani",
    title: "Vegetable Dum Biryani",
    category: "indian-classics",
    categoryLabel: "Indian Classics",
    cuisine: "Hyderabadi",
    prepTime: "55 mins",
    difficulty: "Medium",
    servings: "4 servings",
    description: "Fragrant basmati rice layered with spiced vegetables, fresh herbs, saffron, and caramelized onions.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=800&q=80",
    tag: "Aromatic",
    entryNumber: "Entry #015 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "vb1", quantity: "2 cups", name: "basmati rice" },
      { id: "vb2", quantity: "3 cups", name: "mixed vegetables" },
      { id: "vb3", quantity: "2 large", name: "onions, sliced" },
      { id: "vb4", quantity: "1 cup", name: "plain yogurt" },
      { id: "vb5", quantity: "2 tbsp", name: "biryani masala" },
      { id: "vb6", quantity: "1/4 cup", name: "fresh mint and coriander" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Cook the Rice",
        description: "Wash and soak rice, then boil until about 70 percent cooked. Drain."
      },
      {
        stepNumber: "02",
        title: "Prepare Vegetables",
        description: "Saute onions and vegetables with yogurt, biryani masala, and fresh herbs."
      },
      {
        stepNumber: "03",
        title: "Layer and Steam",
        description: "Layer rice over the vegetables, cover tightly, and cook on low heat until everything is tender."
      }
    ]
  },
  {
    id: "16",
    slug: "masala-dosa",
    title: "Masala Dosa",
    category: "indian-classics",
    categoryLabel: "Indian Classics",
    cuisine: "South Indian",
    prepTime: "35 mins",
    difficulty: "Medium",
    servings: "4 dosas",
    description: "Crispy fermented rice crepes filled with spiced potato masala and served with coconut chutney.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    tag: "South Indian",
    entryNumber: "Entry #016 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 dosas",
    ingredients: [
      { id: "md1", quantity: "2 cups", name: "prepared dosa batter" },
      { id: "md2", quantity: "4 medium", name: "boiled potatoes" },
      { id: "md3", quantity: "1 large", name: "onion, sliced" },
      { id: "md4", quantity: "1 tsp", name: "mustard seeds" },
      { id: "md5", quantity: "8", name: "curry leaves" },
      { id: "md6", quantity: "2 tbsp", name: "cooking oil" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Make Potato Masala",
        description: "Temper mustard seeds and curry leaves, add onions and mashed potatoes, and season."
      },
      {
        stepNumber: "02",
        title: "Spread the Batter",
        description: "Pour batter onto a hot greased skillet and spread into a thin circle."
      },
      {
        stepNumber: "03",
        title: "Crisp and Fill",
        description: "Cook until golden and crisp, add potato masala, fold, and serve."
      }
    ]
  },
  {
    id: "17",
    slug: "chole-bhature",
    title: "Chole Bhature",
    category: "indian-classics",
    categoryLabel: "Indian Classics",
    cuisine: "Punjabi",
    prepTime: "50 mins",
    difficulty: "Medium",
    servings: "4 servings",
    description: "Spiced chickpea curry paired with fluffy deep-fried Indian bread for a hearty Punjabi meal.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    tag: "Punjabi Favorite",
    entryNumber: "Entry #017 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "cb1", quantity: "2 cans", name: "cooked chickpeas, drained" },
      { id: "cb2", quantity: "2 large", name: "onions, finely chopped" },
      { id: "cb3", quantity: "3 medium", name: "tomatoes, chopped" },
      { id: "cb4", quantity: "2 cups", name: "all-purpose flour" },
      { id: "cb5", quantity: "1/2 cup", name: "plain yogurt" },
      { id: "cb6", quantity: "2 tbsp", name: "chole masala" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Prepare the Dough",
        description: "Combine flour, yogurt, salt, and water into a soft dough. Rest for 30 minutes."
      },
      {
        stepNumber: "02",
        title: "Cook the Chole",
        description: "Saute onions and tomatoes with spices, add chickpeas and simmer until the gravy thickens."
      },
      {
        stepNumber: "03",
        title: "Fry the Bhature",
        description: "Roll dough into discs and deep-fry until puffed and golden. Serve with hot chole."
      }
    ]
  },
  {
    id: "18",
    slug: "dal-tadka",
    title: "Dal Tadka",
    category: "indian-classics",
    categoryLabel: "Indian Classics",
    cuisine: "North Indian",
    prepTime: "30 mins",
    difficulty: "Easy",
    servings: "4 servings",
    description: "Comforting yellow lentils finished with a sizzling tempering of cumin, garlic, dried chilies, and ghee.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    tag: "Comfort Food",
    entryNumber: "Entry #018 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "dt1", quantity: "1 cup", name: "toor dal" },
      { id: "dt2", quantity: "1 medium", name: "onion, chopped" },
      { id: "dt3", quantity: "2 medium", name: "tomatoes, chopped" },
      { id: "dt4", quantity: "4 cloves", name: "garlic, sliced" },
      { id: "dt5", quantity: "1 tsp", name: "cumin seeds" },
      { id: "dt6", quantity: "1 tbsp", name: "ghee" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Cook the Lentils",
        description: "Pressure-cook washed lentils with turmeric and water until completely soft."
      },
      {
        stepNumber: "02",
        title: "Prepare the Base",
        description: "Saute onions and tomatoes with spices until soft, then stir in the cooked dal."
      },
      {
        stepNumber: "03",
        title: "Add the Tadka",
        description: "Heat ghee, fry cumin, garlic, and dried chilies, then pour over the dal before serving."
      }
    ]
  },
  {
    id: "19",
    slug: "aloo-paratha",
    title: "Aloo Paratha",
    category: "indian-classics",
    categoryLabel: "Indian Classics",
    cuisine: "Punjabi",
    prepTime: "35 mins",
    difficulty: "Medium",
    servings: "4 parathas",
    description: "Golden whole-wheat flatbreads stuffed with seasoned mashed potatoes and fresh coriander.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
    tag: "Breakfast",
    entryNumber: "Entry #019 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 parathas",
    ingredients: [
      { id: "ap1", quantity: "2 cups", name: "whole-wheat flour" },
      { id: "ap2", quantity: "3 medium", name: "boiled potatoes" },
      { id: "ap3", quantity: "1", name: "green chili, finely chopped" },
      { id: "ap4", quantity: "2 tbsp", name: "fresh coriander" },
      { id: "ap5", quantity: "1 tsp", name: "roasted cumin powder" },
      { id: "ap6", quantity: "4 tsp", name: "ghee or oil for cooking" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Prepare the Filling",
        description: "Mash potatoes with chili, coriander, cumin, and salt."
      },
      {
        stepNumber: "02",
        title: "Stuff and Roll",
        description: "Prepare a soft wheat dough, fill portions with potato mixture, seal, and roll gently."
      },
      {
        stepNumber: "03",
        title: "Cook the Parathas",
        description: "Cook on a hot tawa with ghee until both sides develop golden-brown spots."
      }
    ]
  },
  {
    id: "20",
    slug: "pav-bhaji",
    title: "Mumbai Pav Bhaji",
    category: "street-food",
    categoryLabel: "Street Food",
    cuisine: "Maharashtrian",
    prepTime: "35 mins",
    difficulty: "Easy",
    servings: "4 servings",
    description: "Buttery toasted bread served alongside a thick mashed vegetable curry seasoned with pav bhaji masala.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
    tag: "Street Food",
    entryNumber: "Entry #020 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "pb1", quantity: "3 medium", name: "potatoes, boiled" },
      { id: "pb2", quantity: "1 cup", name: "green peas" },
      { id: "pb3", quantity: "2 medium", name: "tomatoes, chopped" },
      { id: "pb4", quantity: "1 large", name: "capsicum, chopped" },
      { id: "pb5", quantity: "2 tbsp", name: "pav bhaji masala" },
      { id: "pb6", quantity: "8 pieces", name: "pav bread rolls" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Boil the Vegetables",
        description: "Cook potatoes and peas until tender, then mash them together."
      },
      {
        stepNumber: "02",
        title: "Cook the Bhaji",
        description: "Saute tomatoes and capsicum with spices, add mashed vegetables, and simmer until thick."
      },
      {
        stepNumber: "03",
        title: "Toast the Pav",
        description: "Toast bread rolls with butter on a skillet and serve with bhaji, lemon, and chopped onions."
      }
    ]
  },
  {
    id: "21",
    slug: "vegetable-poha",
    title: "Vegetable Poha",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Indian",
    prepTime: "20 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "Light flattened rice cooked with onions, green peas, turmeric, mustard seeds, and fresh lemon.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    tag: "Quick Breakfast",
    entryNumber: "Entry #021 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "po1", quantity: "2 cups", name: "thick poha" },
      { id: "po2", quantity: "1 medium", name: "onion, chopped" },
      { id: "po3", quantity: "1/2 cup", name: "green peas" },
      { id: "po4", quantity: "1 tsp", name: "mustard seeds" },
      { id: "po5", quantity: "1/2 tsp", name: "turmeric powder" },
      { id: "po6", quantity: "1", name: "lemon, juiced" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Rinse the Poha",
        description: "Rinse poha briefly in a sieve and let it soften. Avoid soaking it for too long."
      },
      {
        stepNumber: "02",
        title: "Temper the Spices",
        description: "Heat oil, add mustard seeds, onions, peas, and turmeric, and cook until tender."
      },
      {
        stepNumber: "03",
        title: "Finish and Serve",
        description: "Fold in poha, warm gently, and finish with lemon juice and fresh coriander."
      }
    ]
  },
  {
    id: "22",
    slug: "chicken-butter-masala",
    title: "Chicken Butter Masala",
    category: "non-vegetarian",
    categoryLabel: "Non-Vegetarian",
    cuisine: "North Indian",
    prepTime: "45 mins",
    difficulty: "Medium",
    servings: "4 servings",
    description: "Tender chicken pieces simmered in a creamy tomato gravy with butter, fenugreek, and warming spices.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    tag: "Restaurant Style",
    entryNumber: "Entry #022 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "cm1", quantity: "600g", name: "boneless chicken, cubed" },
      { id: "cm2", quantity: "200g", name: "plain yogurt" },
      { id: "cm3", quantity: "3 large", name: "tomatoes, pureed" },
      { id: "cm4", quantity: "2 tbsp", name: "butter" },
      { id: "cm5", quantity: "100ml", name: "fresh cream" },
      { id: "cm6", quantity: "1 tsp", name: "garam masala" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Marinate the Chicken",
        description: "Coat chicken with yogurt, ginger-garlic paste, salt, and spices. Rest for 20 minutes."
      },
      {
        stepNumber: "02",
        title: "Cook the Chicken",
        description: "Sear chicken pieces in a pan until browned and cooked through."
      },
      {
        stepNumber: "03",
        title: "Prepare the Gravy",
        description: "Simmer tomato puree with butter and spices, add chicken and cream, and cook until tender."
      }
    ]
  },
  {
    id: "23",
    slug: "chicken-biryani",
    title: "Chicken Biryani",
    category: "non-vegetarian",
    categoryLabel: "Non-Vegetarian",
    cuisine: "South Asian",
    prepTime: "60 mins",
    difficulty: "Advanced",
    servings: "4 servings",
    description: "Layered basmati rice and spiced chicken enriched with herbs, caramelized onions, and aromatic whole spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=800&q=80",
    tag: "Signature Dish",
    entryNumber: "Entry #023 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "chb1", quantity: "600g", name: "bone-in chicken pieces" },
      { id: "chb2", quantity: "2 cups", name: "basmati rice" },
      { id: "chb3", quantity: "1 cup", name: "plain yogurt" },
      { id: "chb4", quantity: "2 large", name: "onions, thinly sliced" },
      { id: "chb5", quantity: "2 tbsp", name: "biryani masala" },
      { id: "chb6", quantity: "1/4 cup", name: "mint and coriander leaves" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Marinate Chicken",
        description: "Mix chicken with yogurt, ginger-garlic paste, biryani masala, and herbs."
      },
      {
        stepNumber: "02",
        title: "Partially Cook Rice",
        description: "Boil soaked rice with whole spices until about 70 percent cooked, then drain."
      },
      {
        stepNumber: "03",
        title: "Layer and Finish",
        description: "Layer rice over chicken, cover tightly, and cook until the chicken is fully cooked and the rice is tender."
      }
    ]
  },
  {
    id: "24",
    slug: "chicken-tikka",
    title: "Chicken Tikka",
    category: "non-vegetarian",
    categoryLabel: "Non-Vegetarian",
    cuisine: "Indian",
    prepTime: "40 mins",
    difficulty: "Medium",
    servings: "4 servings",
    description: "Juicy marinated chicken pieces seasoned with yogurt, paprika, lemon, and traditional tandoori spices.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    tag: "Grill Special",
    entryNumber: "Entry #024 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "ct1", quantity: "600g", name: "boneless chicken, cubed" },
      { id: "ct2", quantity: "150g", name: "thick plain yogurt" },
      { id: "ct3", quantity: "1 tbsp", name: "ginger-garlic paste" },
      { id: "ct4", quantity: "1 tsp", name: "Kashmiri chili powder" },
      { id: "ct5", quantity: "1 tsp", name: "garam masala" },
      { id: "ct6", quantity: "1", name: "lemon, juiced" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Prepare the Marinade",
        description: "Combine yogurt, spices, lemon juice, and ginger-garlic paste."
      },
      {
        stepNumber: "02",
        title: "Marinate the Chicken",
        description: "Coat chicken thoroughly and refrigerate for at least 30 minutes."
      },
      {
        stepNumber: "03",
        title: "Grill Until Done",
        description: "Thread onto skewers and grill or bake at 220°C until browned and cooked through."
      }
    ]
  },
  {
    id: "25",
    slug: "egg-curry",
    title: "Homestyle Egg Curry",
    category: "non-vegetarian",
    categoryLabel: "Non-Vegetarian",
    cuisine: "Indian",
    prepTime: "30 mins",
    difficulty: "Easy",
    servings: "3 servings",
    description: "Boiled eggs simmered in an onion-tomato gravy flavored with coriander, cumin, turmeric, and garam masala.",
    image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&w=800&q=80",
    tag: "Everyday Meal",
    entryNumber: "Entry #025 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 3 servings",
    ingredients: [
      { id: "ec1", quantity: "6 large", name: "eggs, hard-boiled" },
      { id: "ec2", quantity: "2 medium", name: "onions, chopped" },
      { id: "ec3", quantity: "3 medium", name: "tomatoes, chopped" },
      { id: "ec4", quantity: "1 tbsp", name: "ginger-garlic paste" },
      { id: "ec5", quantity: "1 tsp", name: "coriander powder" },
      { id: "ec6", quantity: "1/2 tsp", name: "garam masala" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Boil the Eggs",
        description: "Boil eggs until firm, cool in water, and peel."
      },
      {
        stepNumber: "02",
        title: "Prepare the Curry",
        description: "Saute onions, ginger-garlic paste, tomatoes, and spices until a thick gravy forms."
      },
      {
        stepNumber: "03",
        title: "Simmer the Eggs",
        description: "Add eggs and a little water. Simmer for 8 minutes and garnish with coriander."
      }
    ]
  },
  {
    id: "26",
    slug: "thai-green-curry",
    title: "Thai Green Curry",
    category: "international",
    categoryLabel: "International Cuisine",
    cuisine: "Thai",
    prepTime: "35 mins",
    difficulty: "Medium",
    servings: "4 servings",
    description: "A fragrant coconut curry with green curry paste, crisp vegetables, basil, and a balanced sweet-savory finish.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
    tag: "Thai Classic",
    entryNumber: "Entry #026 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "tg1", quantity: "400ml", name: "coconut milk" },
      { id: "tg2", quantity: "3 tbsp", name: "Thai green curry paste" },
      { id: "tg3", quantity: "300g", name: "firm tofu or chicken" },
      { id: "tg4", quantity: "2 cups", name: "mixed vegetables" },
      { id: "tg5", quantity: "1 tbsp", name: "soy sauce" },
      { id: "tg6", quantity: "1/4 cup", name: "Thai basil leaves" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Bloom the Curry Paste",
        description: "Heat a little coconut milk and stir in curry paste until fragrant."
      },
      {
        stepNumber: "02",
        title: "Simmer the Curry",
        description: "Add remaining coconut milk, protein, vegetables, and soy sauce. Simmer until cooked."
      },
      {
        stepNumber: "03",
        title: "Finish with Basil",
        description: "Add basil leaves and serve hot with steamed jasmine rice."
      }
    ]
  },
  {
    id: "27",
    slug: "japanese-chicken-teriyaki",
    title: "Japanese Chicken Teriyaki",
    category: "international",
    categoryLabel: "International Cuisine",
    cuisine: "Japanese",
    prepTime: "30 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "Pan-seared chicken coated in a glossy soy, ginger, and mirin glaze with a sweet-savory finish.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tag: "Japanese Classic",
    entryNumber: "Entry #027 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "jt1", quantity: "400g", name: "boneless chicken thighs" },
      { id: "jt2", quantity: "3 tbsp", name: "soy sauce" },
      { id: "jt3", quantity: "2 tbsp", name: "mirin" },
      { id: "jt4", quantity: "1 tbsp", name: "honey or sugar" },
      { id: "jt5", quantity: "1 tsp", name: "fresh grated ginger" },
      { id: "jt6", quantity: "2 cups", name: "cooked rice" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Sear the Chicken",
        description: "Season chicken lightly and sear in a hot skillet until golden on both sides."
      },
      {
        stepNumber: "02",
        title: "Make the Teriyaki Glaze",
        description: "Combine soy sauce, mirin, honey, and ginger, then add to the skillet."
      },
      {
        stepNumber: "03",
        title: "Glaze and Serve",
        description: "Simmer until chicken is cooked through and the sauce becomes glossy. Serve with rice."
      }
    ]
  },
  {
    id: "28",
    slug: "mexican-bean-burrito",
    title: "Mexican Bean Burrito",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Mexican",
    prepTime: "20 mins",
    difficulty: "Easy",
    servings: "2 burritos",
    description: "Warm tortillas packed with seasoned beans, rice, crunchy vegetables, salsa, and creamy avocado.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    tag: "Quick Lunch",
    entryNumber: "Entry #028 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 burritos",
    ingredients: [
      { id: "mb1", quantity: "2 large", name: "flour tortillas" },
      { id: "mb2", quantity: "1 cup", name: "cooked black beans" },
      { id: "mb3", quantity: "1 cup", name: "cooked rice" },
      { id: "mb4", quantity: "1/2 cup", name: "sweet corn" },
      { id: "mb5", quantity: "1", name: "avocado, sliced" },
      { id: "mb6", quantity: "1/2 cup", name: "tomato salsa" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Season the Beans",
        description: "Warm beans with cumin, paprika, salt, and a splash of water."
      },
      {
        stepNumber: "02",
        title: "Assemble the Filling",
        description: "Layer rice, beans, corn, salsa, and avocado over warmed tortillas."
      },
      {
        stepNumber: "03",
        title: "Fold and Toast",
        description: "Fold the sides inward, roll tightly, and toast briefly in a dry skillet."
      }
    ]
  },
  {
    id: "29",
    slug: "creamy-mushroom-pasta",
    title: "Creamy Mushroom Pasta",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Italian",
    prepTime: "25 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "Silky pasta tossed with browned mushrooms, garlic, cream, and freshly grated parmesan.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    tag: "Comfort Food",
    entryNumber: "Entry #029 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "mp1", quantity: "200g", name: "fettuccine pasta" },
      { id: "mp2", quantity: "250g", name: "button mushrooms, sliced" },
      { id: "mp3", quantity: "3 cloves", name: "garlic, minced" },
      { id: "mp4", quantity: "150ml", name: "cooking cream" },
      { id: "mp5", quantity: "1/4 cup", name: "grated parmesan" },
      { id: "mp6", quantity: "1 tbsp", name: "olive oil" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Cook the Pasta",
        description: "Boil pasta in salted water until al dente. Reserve a cup of pasta water."
      },
      {
        stepNumber: "02",
        title: "Brown the Mushrooms",
        description: "Saute mushrooms in olive oil until golden, then add garlic."
      },
      {
        stepNumber: "03",
        title: "Create the Sauce",
        description: "Add cream, parmesan, and pasta. Toss with reserved water until smooth and serve."
      }
    ]
  },
  {
    id: "30",
    slug: "margherita-pizza",
    title: "Margherita Pizza",
    category: "baking-grains",
    categoryLabel: "Baking & Grains",
    cuisine: "Italian",
    prepTime: "45 mins",
    difficulty: "Medium",
    servings: "2 servings",
    description: "A classic thin-crust pizza topped with tomato sauce, fresh mozzarella, basil, and extra-virgin olive oil.",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
    tag: "Italian Classic",
    entryNumber: "Entry #030 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "mz1", quantity: "250g", name: "prepared pizza dough" },
      { id: "mz2", quantity: "100g", name: "tomato pizza sauce" },
      { id: "mz3", quantity: "150g", name: "fresh mozzarella" },
      { id: "mz4", quantity: "1/4 cup", name: "fresh basil leaves" },
      { id: "mz5", quantity: "1 tbsp", name: "extra-virgin olive oil" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Shape the Dough",
        description: "Stretch the dough into a thin circle on a lightly floured surface."
      },
      {
        stepNumber: "02",
        title: "Add the Toppings",
        description: "Spread tomato sauce evenly and arrange mozzarella over the base."
      },
      {
        stepNumber: "03",
        title: "Bake the Pizza",
        description: "Bake at 240°C until the crust is golden and cheese is bubbling. Add basil before serving."
      }
    ]
  },
  {
    id: "31",
    slug: "greek-village-salad",
    title: "Greek Village Salad",
    category: "plant-based",
    categoryLabel: "Plant-Based",
    cuisine: "Greek",
    prepTime: "15 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "A refreshing Mediterranean salad of tomatoes, cucumber, olives, red onion, feta, and oregano vinaigrette.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tag: "Fresh & Light",
    entryNumber: "Entry #031 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "gs1", quantity: "2 large", name: "ripe tomatoes, chopped" },
      { id: "gs2", quantity: "1 medium", name: "cucumber, sliced" },
      { id: "gs3", quantity: "1/2", name: "red onion, thinly sliced" },
      { id: "gs4", quantity: "100g", name: "feta cheese" },
      { id: "gs5", quantity: "1/2 cup", name: "Kalamata olives" },
      { id: "gs6", quantity: "2 tbsp", name: "olive oil" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Prepare the Vegetables",
        description: "Chop tomatoes and cucumber, then slice the red onion."
      },
      {
        stepNumber: "02",
        title: "Combine the Salad",
        description: "Toss vegetables and olives gently in a serving bowl."
      },
      {
        stepNumber: "03",
        title: "Dress and Serve",
        description: "Add feta, olive oil, oregano, and black pepper just before serving."
      }
    ]
  },
  {
    id: "32",
    slug: "roasted-vegetable-buddha-bowl",
    title: "Roasted Vegetable Buddha Bowl",
    category: "plant-based",
    categoryLabel: "Plant-Based",
    cuisine: "Modern Global",
    prepTime: "35 mins",
    difficulty: "Easy",
    servings: "2 bowls",
    description: "A nourishing bowl of roasted vegetables, quinoa, chickpeas, and creamy lemon-tahini dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tag: "Plant Powered",
    entryNumber: "Entry #032 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 bowls",
    ingredients: [
      { id: "bb1", quantity: "1 cup", name: "quinoa, uncooked" },
      { id: "bb2", quantity: "1 can", name: "chickpeas, drained" },
      { id: "bb3", quantity: "2 cups", name: "mixed vegetables, chopped" },
      { id: "bb4", quantity: "2 tbsp", name: "tahini" },
      { id: "bb5", quantity: "1", name: "lemon, juiced" },
      { id: "bb6", quantity: "2 tbsp", name: "olive oil" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Roast the Vegetables",
        description: "Season vegetables and chickpeas with oil and spices, then roast at 200°C until tender."
      },
      {
        stepNumber: "02",
        title: "Cook the Quinoa",
        description: "Rinse quinoa and simmer in water until fluffy."
      },
      {
        stepNumber: "03",
        title: "Assemble the Bowl",
        description: "Arrange quinoa and roasted vegetables in bowls and drizzle with lemon-tahini dressing."
      }
    ]
  },
  {
    id: "33",
    slug: "crispy-cauliflower-tacos",
    title: "Crispy Cauliflower Tacos",
    category: "plant-based",
    categoryLabel: "Plant-Based",
    cuisine: "Mexican-Inspired",
    prepTime: "30 mins",
    difficulty: "Easy",
    servings: "3 servings",
    description: "Roasted spiced cauliflower tucked into warm tortillas with crunchy cabbage and tangy lime dressing.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    tag: "Meat-Free",
    entryNumber: "Entry #033 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 3 servings",
    ingredients: [
      { id: "ca1", quantity: "1 medium", name: "cauliflower, cut into florets" },
      { id: "ca2", quantity: "6 small", name: "corn tortillas" },
      { id: "ca3", quantity: "2 cups", name: "shredded cabbage" },
      { id: "ca4", quantity: "1 tsp", name: "smoked paprika" },
      { id: "ca5", quantity: "1", name: "lime, juiced" },
      { id: "ca6", quantity: "1", name: "avocado, sliced" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Season the Cauliflower",
        description: "Toss florets with oil, paprika, cumin, and salt."
      },
      {
        stepNumber: "02",
        title: "Roast Until Crisp",
        description: "Roast at 220°C for 20–25 minutes, turning once, until browned."
      },
      {
        stepNumber: "03",
        title: "Build the Tacos",
        description: "Fill warm tortillas with cauliflower, cabbage, avocado, and lime dressing."
      }
    ]
  },
  {
    id: "34",
    slug: "lemon-herb-couscous",
    title: "Lemon Herb Couscous",
    category: "quick-meals",
    categoryLabel: "Quick Meals (<25m)",
    cuisine: "Mediterranean",
    prepTime: "15 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "Fluffy couscous tossed with lemon zest, fresh parsley, cucumber, and extra-virgin olive oil.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tag: "Quick & Fresh",
    entryNumber: "Entry #034 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "lc1", quantity: "1 cup", name: "couscous" },
      { id: "lc2", quantity: "1 cup", name: "boiling vegetable stock" },
      { id: "lc3", quantity: "1", name: "lemon, zested and juiced" },
      { id: "lc4", quantity: "1/2 cup", name: "fresh parsley, chopped" },
      { id: "lc5", quantity: "1/2", name: "cucumber, diced" },
      { id: "lc6", quantity: "2 tbsp", name: "olive oil" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Steam the Couscous",
        description: "Pour boiling stock over couscous, cover, and leave for 5 minutes."
      },
      {
        stepNumber: "02",
        title: "Fluff and Season",
        description: "Fluff couscous with a fork and mix in lemon zest, juice, and olive oil."
      },
      {
        stepNumber: "03",
        title: "Add Fresh Herbs",
        description: "Fold in cucumber and parsley, season to taste, and serve."
      }
    ]
  },
  {
    id: "35",
    slug: "classic-pancakes",
    title: "Classic Buttermilk Pancakes",
    category: "breakfast",
    categoryLabel: "Breakfast",
    cuisine: "American",
    prepTime: "20 mins",
    difficulty: "Easy",
    servings: "4 servings",
    description: "Soft, fluffy pancakes with golden edges, a tender crumb, and a light buttery flavor.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    tag: "Breakfast Favorite",
    entryNumber: "Entry #035 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "cp1", quantity: "1.5 cups", name: "all-purpose flour" },
      { id: "cp2", quantity: "1.25 cups", name: "buttermilk" },
      { id: "cp3", quantity: "1 large", name: "egg" },
      { id: "cp4", quantity: "2 tbsp", name: "melted butter" },
      { id: "cp5", quantity: "2 tbsp", name: "sugar" },
      { id: "cp6", quantity: "1 tsp", name: "baking powder" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Mix the Batter",
        description: "Whisk flour, sugar, baking powder, buttermilk, egg, and melted butter until just combined."
      },
      {
        stepNumber: "02",
        title: "Heat the Skillet",
        description: "Warm a lightly greased nonstick pan over medium heat."
      },
      {
        stepNumber: "03",
        title: "Cook the Pancakes",
        description: "Pour small rounds of batter and flip when bubbles form. Cook until both sides are golden."
      }
    ]
  },
  {
    id: "36",
    slug: "overnight-chia-pudding",
    title: "Overnight Chia Pudding",
    category: "breakfast",
    categoryLabel: "Breakfast",
    cuisine: "Modern Global",
    prepTime: "10 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "Creamy chia seeds soaked overnight in milk and vanilla, topped with fresh berries and crunchy nuts.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    tag: "Make Ahead",
    entryNumber: "Entry #036 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "chp1", quantity: "4 tbsp", name: "chia seeds" },
      { id: "chp2", quantity: "1.5 cups", name: "milk of choice" },
      { id: "chp3", quantity: "1 tsp", name: "vanilla extract" },
      { id: "chp4", quantity: "1 tbsp", name: "maple syrup or honey" },
      { id: "chp5", quantity: "1 cup", name: "fresh berries" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Mix the Ingredients",
        description: "Whisk chia seeds, milk, vanilla, and sweetener in a bowl or jar."
      },
      {
        stepNumber: "02",
        title: "Refrigerate Overnight",
        description: "Stir again after 10 minutes, cover, and refrigerate for at least 4 hours."
      },
      {
        stepNumber: "03",
        title: "Add the Toppings",
        description: "Stir until creamy and serve with fresh berries and nuts."
      }
    ]
  },
  {
    id: "37",
    slug: "french-toast",
    title: "Cinnamon French Toast",
    category: "breakfast",
    categoryLabel: "Breakfast",
    cuisine: "French-Inspired",
    prepTime: "15 mins",
    difficulty: "Easy",
    servings: "2 servings",
    description: "Thick slices of bread dipped in cinnamon-vanilla egg custard and pan-fried until golden.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
    tag: "Sweet Breakfast",
    entryNumber: "Entry #037 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 2 servings",
    ingredients: [
      { id: "ft1", quantity: "4 slices", name: "thick bread" },
      { id: "ft2", quantity: "2 large", name: "eggs" },
      { id: "ft3", quantity: "1/2 cup", name: "milk" },
      { id: "ft4", quantity: "1 tsp", name: "ground cinnamon" },
      { id: "ft5", quantity: "1 tsp", name: "vanilla extract" },
      { id: "ft6", quantity: "1 tbsp", name: "butter" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Prepare the Custard",
        description: "Whisk eggs, milk, cinnamon, and vanilla in a shallow bowl."
      },
      {
        stepNumber: "02",
        title: "Dip the Bread",
        description: "Dip bread slices briefly into the egg mixture, coating both sides."
      },
      {
        stepNumber: "03",
        title: "Pan-Fry Until Golden",
        description: "Cook in butter over medium heat until golden on both sides. Serve warm."
      }
    ]
  },
  {
    id: "38",
    slug: "blueberry-muffins",
    title: "Blueberry Muffins",
    category: "desserts",
    categoryLabel: "Desserts",
    cuisine: "American",
    prepTime: "35 mins",
    difficulty: "Easy",
    servings: "12 muffins",
    description: "Tender vanilla muffins bursting with juicy blueberries and topped with a delicate golden crust.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80",
    tag: "Home Baking",
    entryNumber: "Entry #038 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 12 muffins",
    ingredients: [
      { id: "bm1", quantity: "2 cups", name: "all-purpose flour" },
      { id: "bm2", quantity: "1 cup", name: "fresh or frozen blueberries" },
      { id: "bm3", quantity: "3/4 cup", name: "sugar" },
      { id: "bm4", quantity: "2 large", name: "eggs" },
      { id: "bm5", quantity: "1/2 cup", name: "milk" },
      { id: "bm6", quantity: "1/2 cup", name: "melted butter" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Prepare the Batter",
        description: "Combine flour, sugar, and baking powder. Separately whisk eggs, milk, and butter, then combine gently."
      },
      {
        stepNumber: "02",
        title: "Fold in Blueberries",
        description: "Fold blueberries into the batter without overmixing."
      },
      {
        stepNumber: "03",
        title: "Bake the Muffins",
        description: "Divide into lined muffin cups and bake at 180°C for 20–25 minutes until golden."
      }
    ]
  },
  {
    id: "39",
    slug: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    category: "desserts",
    categoryLabel: "Desserts",
    cuisine: "French-Inspired",
    prepTime: "25 mins",
    difficulty: "Medium",
    servings: "4 cakes",
    description: "Individual chocolate cakes with delicate outer shells and warm, flowing chocolate centers.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    tag: "Chocolate Dessert",
    entryNumber: "Entry #039 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 cakes",
    ingredients: [
      { id: "cl1", quantity: "150g", name: "dark chocolate" },
      { id: "cl2", quantity: "100g", name: "unsalted butter" },
      { id: "cl3", quantity: "2 large", name: "eggs" },
      { id: "cl4", quantity: "2 large", name: "egg yolks" },
      { id: "cl5", quantity: "1/4 cup", name: "sugar" },
      { id: "cl6", quantity: "2 tbsp", name: "all-purpose flour" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Melt Chocolate and Butter",
        description: "Gently melt chocolate and butter together, then let the mixture cool slightly."
      },
      {
        stepNumber: "02",
        title: "Prepare the Batter",
        description: "Whisk eggs, yolks, and sugar until thick. Fold in chocolate and flour."
      },
      {
        stepNumber: "03",
        title: "Bake and Serve",
        description: "Pour into greased ramekins and bake at 220°C for approximately 8–10 minutes. Serve immediately."
      }
    ]
  },
  {
    id: "40",
    slug: "classic-tiramisu",
    title: "Classic Tiramisu",
    category: "desserts",
    categoryLabel: "Desserts",
    cuisine: "Italian",
    prepTime: "30 mins",
    difficulty: "Medium",
    servings: "6 servings",
    description: "Espresso-soaked ladyfingers layered with mascarpone cream and finished with a generous dusting of cocoa.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    tag: "Italian Dessert",
    entryNumber: "Entry #040 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 6 servings",
    ingredients: [
      { id: "ti1", quantity: "250g", name: "mascarpone cheese" },
      { id: "ti2", quantity: "200g", name: "ladyfinger biscuits" },
      { id: "ti3", quantity: "200ml", name: "strong espresso, cooled" },
      { id: "ti4", quantity: "250ml", name: "whipping cream" },
      { id: "ti5", quantity: "3 tbsp", name: "sugar" },
      { id: "ti6", quantity: "2 tbsp", name: "unsweetened cocoa powder" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Prepare the Cream",
        description: "Whip cream with sugar until soft peaks form, then gently fold in mascarpone."
      },
      {
        stepNumber: "02",
        title: "Layer the Biscuits",
        description: "Briefly dip ladyfingers into cooled espresso and arrange them in a dish."
      },
      {
        stepNumber: "03",
        title: "Chill and Finish",
        description: "Layer with mascarpone cream, repeat, refrigerate for at least 4 hours, and dust with cocoa."
      }
    ]
  },
  {
    id: "41",
    slug: "mango-panna-cotta",
    title: "Mango Panna Cotta",
    category: "desserts",
    categoryLabel: "Desserts",
    cuisine: "Italian-Inspired",
    prepTime: "20 mins",
    difficulty: "Medium",
    servings: "4 servings",
    description: "Silky vanilla cream pudding paired with a bright mango puree for a refreshing fruit-forward dessert.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    tag: "Fruit Dessert",
    entryNumber: "Entry #041 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 4 servings",
    ingredients: [
      { id: "mc1", quantity: "300ml", name: "heavy cream" },
      { id: "mc2", quantity: "150ml", name: "milk" },
      { id: "mc3", quantity: "200g", name: "ripe mango puree" },
      { id: "mc4", quantity: "50g", name: "sugar" },
      { id: "mc5", quantity: "2 tsp", name: "gelatin powder" },
      { id: "mc6", quantity: "1 tsp", name: "vanilla extract" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Bloom the Gelatin",
        description: "Sprinkle gelatin over a small amount of cool water and allow it to hydrate."
      },
      {
        stepNumber: "02",
        title: "Warm the Cream",
        description: "Heat cream, milk, sugar, and vanilla gently. Stir in the bloomed gelatin until dissolved."
      },
      {
        stepNumber: "03",
        title: "Set and Serve",
        description: "Pour into serving glasses, chill until set, and top with mango puree."
      }
    ]
  },
  {
    id: "42",
    slug: "banana-walnut-bread",
    title: "Banana Walnut Bread",
    category: "baking-grains",
    categoryLabel: "Baking & Grains",
    cuisine: "American",
    prepTime: "60 mins",
    difficulty: "Easy",
    servings: "1 loaf",
    description: "Moist banana bread with toasted walnuts, warm cinnamon, and a tender crumb ideal for breakfast or snacks.",
    image: "https://images.unsplash.com/photo-1606101273945-e9eba91c0b8a?auto=format&fit=crop&w=800&q=80",
    tag: "Home Baking",
    entryNumber: "Entry #042 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 1 loaf",
    ingredients: [
      { id: "bw1", quantity: "3 medium", name: "ripe bananas, mashed" },
      { id: "bw2", quantity: "1.5 cups", name: "all-purpose flour" },
      { id: "bw3", quantity: "1/2 cup", name: "brown sugar" },
      { id: "bw4", quantity: "1 large", name: "egg" },
      { id: "bw5", quantity: "75g", name: "melted butter" },
      { id: "bw6", quantity: "1/2 cup", name: "chopped walnuts" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Mash the Bananas",
        description: "Mash ripe bananas in a large bowl and mix with melted butter, sugar, and egg."
      },
      {
        stepNumber: "02",
        title: "Combine the Batter",
        description: "Fold in flour, baking soda, cinnamon, and walnuts until just combined."
      },
      {
        stepNumber: "03",
        title: "Bake the Loaf",
        description: "Transfer to a loaf tin and bake at 175°C for 45–55 minutes until a tester comes out clean."
      }
    ]
  },
  {
    id: "43",
    slug: "strawberry-cheesecake",
    title: "Strawberry Cheesecake",
    category: "desserts",
    categoryLabel: "Desserts",
    cuisine: "American",
    prepTime: "1 hr 15 mins",
    difficulty: "Advanced",
    servings: "8 servings",
    description: "Creamy baked cheesecake on a buttery biscuit crust, topped with fresh strawberries and a glossy fruit sauce.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    tag: "Celebration Dessert",
    entryNumber: "Entry #043 CULINARY NOTEBOOK",
    yieldInfo: "Yield: 8 servings",
    ingredients: [
      { id: "sc1", quantity: "200g", name: "digestive biscuits, crushed" },
      { id: "sc2", quantity: "80g", name: "melted butter" },
      { id: "sc3", quantity: "500g", name: "cream cheese" },
      { id: "sc4", quantity: "150g", name: "sugar" },
      { id: "sc5", quantity: "2 large", name: "eggs" },
      { id: "sc6", quantity: "250g", name: "fresh strawberries" }
    ],
    steps: [
      {
        stepNumber: "01",
        title: "Make the Crust",
        description: "Mix crushed biscuits with melted butter, press into a springform tin, and chill."
      },
      {
        stepNumber: "02",
        title: "Prepare the Filling",
        description: "Beat cream cheese and sugar until smooth, then mix in eggs one at a time."
      },
      {
        stepNumber: "03",
        title: "Bake and Decorate",
        description: "Pour over the crust and bake at 160°C until nearly set. Cool completely, chill, and top with strawberries."
      }
    ]
  }
];

