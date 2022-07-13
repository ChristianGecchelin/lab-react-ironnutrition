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
    let foodFiltered = foods.filter((el) => {
      if (search == '') {
        return el;
      } else {
        return el.name.includes(search);
      }
    });
    setFoods(foodFiltered);
  };

  return (
    <div className="App">
      <h1>Hola Gordito</h1>
      <Search filterFood={filteredFoodList} />
      <AddFoodForm addFood={addNewFood} />
      <ListFood foods={foods} />
    </div>
  );
}
export default App;
