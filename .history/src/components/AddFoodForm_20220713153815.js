import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

const AddFoodForm = (props) => {
  const [name, setName] = useState('Name');
  const [image, setImage] = useState('ImageURL');
  const [calories, setCalories] = useState('Calories');
  const [servings, setServings] = useState('Servings');

  const handleNameinput = (e) => {
    setName(e.target.value);
  };
  const handleImageinput = (e) => {
    setImage(e.target.value);
  };
  const handleCaloriesinput = (e) => {
    setCalories(e.target.value);
  };
  const handleServingsinput = (e) => {
    setServings(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    console.log(newFood);
    // Reset the state
    setName('');
    setImage('');
    setCalories('');
    setServings('');
    return newFood;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input a name!' }]}
      >
        <Input value={name} type="text" onChange={handleNameinput} />
      </Form.Item>
      <Form.Item
        label="Image"
        name="image"
        rules={[{ required: true, message: 'Please enter a valid URL!' }]}
      >
        <Input value={image} type="text" onChange={handleImageinput} />
      </Form.Item>
      <Form.Item
        label="Calories"
        name="calories"
        rules={[{ required: true, message: 'Please input calories' }]}
      >
        <Input value={calories} type="text" onChange={handleCaloriesinput} />
      </Form.Item>
      <Form.Item
        label="Servings"
        name="servings"
        rules={[{ required: true, message: 'Please enter the servings!' }]}
      >
        <Input value={servings} type="text" onChange={handleServingsinput} />
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
