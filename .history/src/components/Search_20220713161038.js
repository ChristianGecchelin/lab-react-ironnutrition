import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const { foods, filterFood } = props;
  const [search, setSearch] = useState('');
  const [firstLetter, setFirstLetter] = useState('All');

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);

    // console.log("selected", e.target.value);
    props.filterMovies(e.target.value);
  };
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
