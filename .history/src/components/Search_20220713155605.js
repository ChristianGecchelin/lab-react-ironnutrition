import { Divider, Input } from 'antd';

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
