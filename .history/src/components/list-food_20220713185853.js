import FoodBox from './FoodBox';
import { Col, Row } from 'antd';
const ListFood = (props) => {
  const { foods, deleteFood } = props;
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          {foods.map((food) => {
            return <FoodBox food={food} deleteFood={deleteFood} />;
          })}
        </Col>
      </Row>
    </div>
  );
};

export default ListFood;
