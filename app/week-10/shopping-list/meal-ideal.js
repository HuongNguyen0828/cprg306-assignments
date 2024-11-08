"use client";

import { useState, useEffect } from "react";
import RecipeIngredients from "./recipe";

export default function MealIdeal({ ingredient }) {
  // Meal is list of meal
  const [meals, setMeals] = useState([]);

  const [mealName, setMealName] = useState("");
  const [recipe, setRecipe] = useState([]);

  // Fetching data, set meals list
  const fetchMeals = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const mealsObject = await response.json();
      const mealsArray = mealsObject.meals;

      // set mealArray
      setMeals(mealsArray);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRecipe = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      const mealObject = await response.json();
      const mealArray = mealObject.meals;
      const mealRecipeObject = mealArray[0];
      // Array of recipe ingredient
      const mealIngredientArray = Object.keys(mealRecipeObject)
        .filter((key) => key.includes("strIngredient"))
        .map((key) => mealRecipeObject[key]);

      // Array of recipe amount correspondingly
      const mealAmountArray = Object.keys(mealRecipeObject)
        .filter((key) => key.includes("strMeasure"))
        .map((key) => mealRecipeObject[key]);

      // MAPPing 2 arrays into 1 array of many {ingredient: amount}
      const mealRecipe = mealIngredientArray.map((ingredient, index) => ({
        id: index,
        name: ingredient,
        amount: mealAmountArray[index],
      }));

      // set meal array
      setRecipe(mealRecipe);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Only fetch if ingredient != ""
    if (ingredient != "")
      //fetchMeals
      fetchMeals();
  }, [ingredient]);

  useEffect(() => {
    // NOt render all when render the page
    if (mealName != "") fetchRecipe();
  }, [mealName]);
  return (
    <>
      {ingredient !== "" ? (
        <div>
          <h2 className="text-3xl font-bold">Meal Ideas</h2>
          <br />
          {/* if meal object found */}
          {meals ? (
            <div>
              <p>
                Here are some meal ideas using{" "}
                <span className="font-bold">{ingredient}</span>:
              </p>
              {meals.map((meal) =>
                // if the mealName matching with meal, render fetching recipe
                mealName == meal.strMeal ? (
                  <div key={meal.idMeal}>
                    <div
                      onClick={() => setMealName(meal.strMeal)}
                      className="m-1 w-96 h-50 p-1 bg-orange-200 hover:bg-orange-400 active:bg-orange-600"
                    >
                      {meal.strMeal}
                      <p className="text-sm pl-1 pt-2">Ingredients needed: </p>
                      <div className="text-sm pl-4">
                        {recipe.map(
                          (eachIngredient) =>
                            eachIngredient.name != "" && (
                              <ul key={eachIngredient.id}>
                                <li>
                                  {eachIngredient.name} ({eachIngredient.amount}
                                  )
                                </li>
                              </ul>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // if NOT matching mealName, just render the mealName, NOT including recipe
                  <div
                    key={meal.idMeal}
                    onClick={() => setMealName(meal.strMeal)}
                    className="m-1 w-96 h-50 p-1 bg-orange-200 hover:bg-orange-400 active:bg-orange-600"
                  >
                    {meal.strMeal}
                  </div>
                )
              )}
            </div>
          ) : (
            // Else,  meal object NOT found
            <p>No matching meal ideas found!</p>
          )}
        </div>
      ) : (
        <p>
          Please click on an item in the list to see meal ideas suggestions.
        </p>
      )}
    </>
  );
}
