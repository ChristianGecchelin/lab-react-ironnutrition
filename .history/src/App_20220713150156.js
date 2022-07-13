import './App.css';
import foods from './foods.json';
import ListFood from './components/List-Food';
import AddFoodForm from './components/AddFoodForm';
function App() {
  return (
    <div className="App">
      <ListFood foods={foods} />
      <AddFoodForm />
    </div>
  );
}
export default App;
