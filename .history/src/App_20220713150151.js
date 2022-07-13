import './App.css';
import foods from './foods.json';
import ListFood from './components/List-Food';
function App() {
  return (
    <div className="App">
      <ListFood foods={foods} />
      <AddFoodForm />
    </div>
  );
}
export default App;
