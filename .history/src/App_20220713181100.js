import './App.css';
import foodsJson from './foods.json';
import ListFood from './components/List-Food';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Divider, Input } from 'antd';
import { useState } from 'react';

function App() {
  const [foodsData, setFoodsData] = useState(foodsJson);
  const [foods, setFoods] = useState(foodsJson);

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodsData, newFood];
    const updatedFoods = [...foods, newFood];

    setFoodsData(updatedFoodsData);
    setFoods(updatedFoods);
  };
  const filteredFoodList = (search) => {
    let foodFiltered = foodsData.filter((food) => {
      if (search === '') {
        return food;
      } else {
        return food.name.toLowerCase().includes(search.toLowerCase());
      }
    });
    setFoods(foodFiltered);
  };
  const deleteFoodFromList = (food) => {
    let foodFiltered = foodsData.filter((elem) => {
      return elem.name !== food.name;
    });
    setFoods(foodFiltered);
  };

  return (
    <div className="App">
      <h1>Hola Gordito</h1>
      <Search filterFood={filteredFoodList} />
      <AddFoodForm addFood={addNewFood} />
      <ListFood foods={foods} deleteFood={deleteFoodFromList} />
    </div>
  );
}
export default App;
