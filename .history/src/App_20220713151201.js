import './App.css';
import foods from './foods.json';
import ListFood from './components/List-Food';
import AddFoodForm from './components/AddFoodForm';
function App() {
  return (
    <div className="App">
      <h1>Hola Gordito</h1>
      <AddFoodForm />
      <ListFood foods={foods} />
    </div>
  );
}
export default App;
