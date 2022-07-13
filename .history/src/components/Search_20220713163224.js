import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const { filterFood } = props;
  const [search, setSearch] = useState('');
  console.log(search);
  const handlerSearchInput = (e) => {
    console.log('hola');
    debugger;
    setSearch(e.target.value);
    filterFood(e.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={(e) => {
          handlerSearchInput(e);
        }}
      />
    </>
  );
};

export default Search;
