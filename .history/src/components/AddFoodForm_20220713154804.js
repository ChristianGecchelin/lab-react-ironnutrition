import { Button, Checkbox, Form, Input } from 'antd';
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
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input a name!' }]}
      >
        <Input value={name} type="text" onChange={handleNameInput} />
      </Form.Item>
      <Form.Item
        label="Image"
        name="image"
        rules={[{ required: true, message: 'Please enter a valid URL!' }]}
      >
        <Input value={image} type="text" onChange={handleImageInput} />
      </Form.Item>
      <Form.Item
        label="Calories"
        name="calories"
        rules={[{ required: true, message: 'Please input calories' }]}
      >
        <Input value={calories} type="number" onChange={handleCaloriesInput} />
      </Form.Item>
      <Form.Item
        label="Servings"
        name="servings"
        rules={[{ required: true, message: 'Please enter the servings!' }]}
      >
        <Input value={servings} type="number" onChange={handleServingsInput} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="submit" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </form>
  );
};

export default AddFoodForm;
