const RowList = (props) => {
  const { food } = props;
  console.log(food);
  return (
    <>
      <p key={food.name}> {food.name} </p>
      <img src={food.image} width={0} />
    </>
  );
};

export default RowList;
