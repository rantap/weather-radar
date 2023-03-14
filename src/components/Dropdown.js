import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Dropdown = ({ handleChange, selected }) => {
  return (
    <div>
      <Select value={selected} onChange={handleChange} displayEmpty>
        <MenuItem value={'All'}>Kaikki kaupungit</MenuItem>
        <MenuItem value={'Tampere'}>Tampere</MenuItem>
        <MenuItem value={'Jyväskylä'}>Jyväskylä</MenuItem>
        <MenuItem value={'Kuopio'}>Kuopio</MenuItem>
        <MenuItem value={'Espoo'}>Espoo</MenuItem>
      </Select>
    </div>
  );
};

export default Dropdown;
