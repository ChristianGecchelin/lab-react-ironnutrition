import FoodBox from './FoodBox';
const ListFood = (props) => {
  const { foods } = props;
  return (
    <>
      <ul>
        {foods.map((food) => {
          return <FoodBox food={food} />;
        })}
      </ul>
    </>
  );
};

export default ListFood;
