import { TextField } from '@mui/material';
import NavbarComp from '../components/Home/NavbarComp'
import PropertDetailComp from '../components/Property/PropertDetailComp'
import { useState } from 'react';

const PropertyDetails = () => {
    const [search,setSearch]=useState("")
      const handleSearchChange = (e) => {
        setSearch(e.target.value);
      };
  return (
    <>
      <NavbarComp>
        <TextField
          sx={{ my: 2 }}
          placeholder="Search"
          onChange={handleSearchChange}
          size="small"
        />
      </NavbarComp>
      <PropertDetailComp search={search} />
    </>
  );
}

export default PropertyDetails