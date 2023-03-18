import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Dropdown = ({ handleChange, selected }) => {
  return (
    <div>
      <Select
        fullWidth
        value={selected}
        onChange={handleChange}
        displayEmpty
        sx={{
          fontFamily: 'Arial',
          fontSize: '13px',
          backgroundColor: 'white',
          textAlign: 'left',
          paddingLeft: '0.3rem',
          width: '100%',
          height: '3rem',
          color: '#262626',
          '& .MuiSvgIcon-root': {
            color: 'black',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#e6e6e6',
          },
        }}
      >
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
