import './App.css';
import foodsJson from './foods.json';
import ListFood from './components/List-Food';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';
import { useState } from 'react';
function App() {
  const [foodsData, setFoodsData] = useState(foodsJson);
  const [foods, setFoods] = useState(foodsJson);
  console.log(foods);
  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodsData, newFood];
    const updatedFoods = [...foods, newFood];

    setFoodsData(updatedFoodsData);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>Hola Gordito</h1>
      <Search foods={foods} />
      <AddFoodForm addFood={addNewFood} />
      <ListFood foods={foods} />
    </div>
  );
}
export default App;
