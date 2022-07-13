import './App.css';
import foodsJson from './foods.json';
import ListFood from './components/List-Food';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
function App() {
  const [foodsData, setFoodsData] = useState(foodsJson);
  const [foods, setFoods] = useState(foodsJson);

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodsData, newFood];
    const updatedFoods = [...foods, newFood];

    setMoviesData(updatedMoviesData);
    setMovies(updatedMovies);
  };

  return (
    <div className="App">
      <h1>Hola Gordito</h1>
      <AddFoodForm addNewFood={addNewFood} />
      <ListFood foods={foods} />
    </div>
  );
}
export default App;
