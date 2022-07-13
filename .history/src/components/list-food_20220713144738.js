import RowList from './RowList';
const ListFood = (props) => {
  console.log(props);
  return (
    <>
      <RowList foods={props.foods} />
    </>
  );
};

export default ListFood;
