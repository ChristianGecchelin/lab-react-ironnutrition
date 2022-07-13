import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

const AddFoodForm = () => {
  const [name, setName] = useState('Name');
  const [image, setImage] = useState('ImageURL');
  const [calories, setCalories] = useState('Calories');
  const [servings, setServings] = useState('Servings');
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

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <form
      onSubmit={handleSubmit}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input a name!' }]}
      >
        <Input value={name} type="text" onChange={setName} />
      </Form.Item>
      <Form.Item
        label="Image"
        name="image"
        rules={[{ required: true, message: 'Please enter a valid URL!' }]}
      >
        <Input value={image} type="text" onChange={setImage} />
      </Form.Item>
      <Form.Item
        label="Calories"
        name="calories"
        rules={[{ required: true, message: 'Please input calories' }]}
      >
        <Input value={calories} type="text" onChange={setCalories} />
      </Form.Item>
      <Form.Item
        label="Servings"
        name="servings"
        rules={[{ required: true, message: 'Please enter the servings!' }]}
      >
        <Input value={servings} type="text" onChange={setServings} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="submit" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddFoodForm;
