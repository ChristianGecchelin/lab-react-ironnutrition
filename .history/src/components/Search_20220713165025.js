import { Divider, Input } from 'antd';
import { useState, useRef } from 'react';

const Search = (props) => {
  const { filterFood } = props;
  const inputEl = useRef('');
  const [search, setSearch] = useState('');
  console.log(search);
  const handlerSearchInput = (e) => {
    console.log(e);
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
        onChange={(e) => handlerSearchInput(e)}
      />
    </>
  );
};

export default Search;
