import './App.css';
import foodsJson from './foods.json';
import ListFood from './components/List-Food';
import AddFoodForm from './components/AddFoodForm';
/* import Search from 'antd/lib/transfer/search'; */
import { Divider, Input } from 'antd';
import { useState } from 'react';

function App() {
  const [foodsData, setFoodsData] = useState(foodsJson);
  const [foods, setFoods] = useState(foodsJson);
  const [search, setSearch] = useState('');

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodsData, newFood];
    const updatedFoods = [...foods, newFood];

    setFoodsData(updatedFoodsData);
    setFoods(updatedFoods);
  };
  let handlerSearchInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  /*  const filterFoodList = (str) => {
    console.log('hola');
    foods.filter((val) => {
      if (str === '') {
        return val;
      } else if (val.name.toLowerCase().includes(str.toLowerCase())) {
        return val;
      }
    });
  }; */

  return (
    <div className="App">
      <h1>Hola Gordito</h1>
      <div>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input
          value={search}
          type="text"
          onChange={(e) => handlerSearchInput(e)}
        />
      </div>
      {/* <Search filterFood={filterFoodList} /> */}
      <AddFoodForm addFood={addNewFood} />
      <ListFood foods={foods} />
    </div>
  );
}
export default App;
