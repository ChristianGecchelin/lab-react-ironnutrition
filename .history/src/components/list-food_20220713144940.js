import RowList from './RowList';
const ListFood = (props) => {
  console.log(props);
  return (
    <>
      <ul>
        <RowList foods={props.foods} />
      </ul>
    </>
  );
};

export default ListFood;
