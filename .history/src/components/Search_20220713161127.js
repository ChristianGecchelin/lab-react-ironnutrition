import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const { foods, filterFood } = props;
  const [search, setSearch] = useState('');

  const handlerSearchInput = (e) => {
    setSearch(e.target.value);
    filterFood(e.target.value);
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
