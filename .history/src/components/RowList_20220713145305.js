const RowList = (props) => {
  const { food } = props;
  console.log(food);
  return (
    <>
      <p> {food.name} </p>
      <img src={food.image} width={0} />
    </>
  );
};

export default RowList;
