const FoodBox = (props) => {
  const { food } = props;
  console.log(food);
  return (
    <>
      <h2 key={food.name}> {food.name} </h2>
      <img src={food.image} width={200} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total calories:</b> {food.calories * food.servings}
      </p>
    </>
  );
};

export default FoodBox;
