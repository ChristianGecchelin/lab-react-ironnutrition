import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const { filterFood } = props;
  const [search, setSearch] = useState('');
  const handlerSearchInput = (e) => {
    console.log(e.target.value);
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
        onChange={}={(e) => handlerSearchInput(e)}
      />
    </>
  );
};

export default Search;
