import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
  
  function Inputdropdown(prop) {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(prop)
  return (
    <div className={prop.className}>
        
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select sx={{border:"2px solid black"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Cars</MenuItem>
          <MenuItem value={20}>MotorsCycles</MenuItem>
          <MenuItem value={30}>MobilePhones</MenuItem>
          <MenuItem value={40}>Garments</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}



export default Inputdropdown