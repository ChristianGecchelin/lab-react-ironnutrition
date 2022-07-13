import './App.css';
import foods from './foods.json';
import ListFood from './components/List-Food';
console.log(foods);
function App() {
  return (
    <div className="App">
      <ListFood foods={foods} />
    </div>
  );
}
export default App;
