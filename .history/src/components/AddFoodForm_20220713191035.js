import { Input, Divider } from 'antd';
import { useState } from 'react';

const AddFoodForm = (props) => {
  const [name, setName] = useState('Name');
  const [image, setImage] = useState('ImageURL');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleImageInput = (e) => {
    setImage(e.target.value);
  };
  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };
  const handleServingsInput = (e) => {
    setServings(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addFood(newFood);
    // Reset the state
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        className="searchBar"
        value={name}
        type="text"
        onChange={handleNameInput}
      />

      <label>Image</label>
      <Input
        className="searchBar"
        value={image}
        type="text"
        onChange={handleImageInput}
      />

      <label>Calories</label>
      <Input
        className="searchBar"
        value={calories}
        type="number"
        onChange={handleCaloriesInput}
      />

      <label>Servings</label>
      <Input
        className="searchBar"
        value={servings}
        type="number"
        onChange={handleServingsInput}
      />

      <button className="botonHide" type="submit">
        Create
      </button>
    </form>
  );
};

export default AddFoodForm;
