import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const { foods } = props;
  const [search, setSearch] = useState('');
  const handlerSearchInput = (e) => {
    setSearch(e.target.value);
    foods.map((food) => {
      console.log(food.name.includes(search));
      return food.name.includes(search) ? food : null;
    });
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handlerSearchInput} />
    </>
  );
};

export default Search;
