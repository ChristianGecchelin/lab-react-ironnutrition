import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

const AddFoodForm = () => {
    const [name, setName] = useState("Name");
    const [image,setImage]= useState("ImageURL")
    const[calories,setCalories]=useState('Calories')
    const[servings,setServings]=useState('Servings')




  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
        <Input value={} type="text" onChange={} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddFoodForm;
