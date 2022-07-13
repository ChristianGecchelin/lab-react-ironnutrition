import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const [search, setSearch] = useState('');
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={() => {}} />
    </>
  );
};

export default Search;
