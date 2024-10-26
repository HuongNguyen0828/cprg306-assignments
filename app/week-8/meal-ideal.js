"use client";

import { useState, useEffect } from "react";

export default function MealIdeal({ ingredient }) {
  // Meal is list of meal
  const [meals, setMeals] = useState([]);

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

  useEffect(() => {
    // Change the default "" ingredient, so that Ideal meal not render whole list
    if (ingredient != "")
      //fetchMeals
      fetchMeals();
  }, [ingredient]);
  return (
    <div>
      {ingredient != "" ? (
        <>
          <h2 className="text-3xl font-bold">Meal Ideas</h2>
          <p>
            Here are some meal ideas using{" "}
            <span className="font-bold">{ingredient}</span>:
          </p>
          <br />
          {meals ? (
            meals.map((meal) => (
              <div
                className="m-1 w-96 h-50 p-1 bg-orange-200 hover:bg-orange-400 active:bg-orange-600"
                key={meal.idMeal}
              >
                {meal.strMeal}
              </div>
            ))
          ) : (
            <p>No matching ideal meal found!</p>
          )}
        </>
      ) : (
        <p>Please click on an item in the list to see meal ideas.</p>
      )}
    </div>
  );
}
