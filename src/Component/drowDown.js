import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div id='dropDown'>

      <FormControl sx={{border:'0px', m: 1, minWidth: 120,width:"200px" }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty

        >
          <MenuItem  value="">
            All Caregories
          </MenuItem>
          <MenuItem value={10}>Cars</MenuItem>
          <MenuItem value={20}>MotorCycles</MenuItem>
          <MenuItem value={30}>MobilePhones</MenuItem>
          <MenuItem value={40}>Garments</MenuItem>
        </Select>
        
      </FormControl>
    </div>
  );
}


