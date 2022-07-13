import FoodBox from './FoodBox';
const ListFood = (props) => {
  const { foods, deleteFood } = props;
  return (
    <>
      <ul>
        {foods.map((food) => {
          return <FoodBox food={food} deleteFood={deleteFood} />;
        })}
      </ul>
    </>
  );
};

export default ListFood;
