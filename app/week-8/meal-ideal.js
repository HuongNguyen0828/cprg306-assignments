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
    //fetchMeals
    fetchMeals();
  }, [ingredient]);
  return (
    <div>
      <h3>Meal Ideals</h3>
      <p>Here are some meal ideas using {ingredient}:</p>

      {meals.length > 0 ? (
        meals.map((meal) => <div key={meal.idMeal}>{meal.strMeal}</div>)
      ) : (
        <p>There are no meal idea found!</p>
      )}
    </div>
  );
}
