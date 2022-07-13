import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const { filterFood } = props;
  const [search, setSearch] = useState('');
  const handlerSearchInput = (e) => {
    let valueUpper = e.target.value[0].toUpperCase();
    console.log(valueUpper);
    setSearch(e.target.value);
    filterFood(valueUpper);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={(e) => handlerSearchInput(e)}
      />
    </>
  );
};

export default Search;
