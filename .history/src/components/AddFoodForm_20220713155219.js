import { Input, Divider } from 'antd';
import { useState } from 'react';

const AddFoodForm = (props) => {
  const [name, setName] = useState('Name');
  const [image, setImage] = useState('ImageURL');
  const [calories, setCalories] = useState('Calories');
  const [servings, setServings] = useState('Servings');

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
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
