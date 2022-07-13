import { Button, Card } from 'antd';
const FoodBox = (props) => {
  const { food, deleteFood } = props;
  const handlerClick = () => {
    deleteFood(food);
  };
  return (
    <Card title="Card title" bordered={false} className="flex">
      <h2 key={food.name}> {food.name} </h2>
      <img src={food.image} width={200} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total calories:</b> {food.calories * food.servings} kcal
      </p>
      <Button
        danger
        type="primary"
        onClick={() => {
          handlerClick();
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

export default FoodBox;
