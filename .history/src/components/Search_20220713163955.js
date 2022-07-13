import { Divider, Input } from 'antd';
import { useState, useRef } from 'react';

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
        ref={inputEl}
        value={search}
        type="text"
        onChange={handlerSearchInput}
      />
    </>
  );
};

export default Search;
