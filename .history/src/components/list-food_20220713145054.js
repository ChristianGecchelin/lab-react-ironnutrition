import RowList from './RowList';
const ListFood = (props) => {
  const { foods } = props;
  return (
    <>
      <ul>
        {foods.map((food) => {
          return <RowList food={food} />;
        })}
      </ul>
    </>
  );
};

export default ListFood;
