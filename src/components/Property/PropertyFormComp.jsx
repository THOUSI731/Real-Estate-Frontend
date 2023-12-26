import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react'
import { createProperty } from '../../features/properties/propertyActions';
import { useDispatch } from 'react-redux';

const PropertyFormComp = ({open,setOpenForm}) => {
     const [propertyForm, setPropertyForm] = useState({
       property_name: "",
       property_type: "",
       property_image: null,
       address: "",
       city: "",
       state: "",
       country: "",
       pin_code: "",
       features: [],
     });
     const dispatch = useDispatch()

     const handleInputChange = (event) => {
       const { name, value } = event.target;

       if (name === "features") {
         setPropertyForm((prevDetails) => ({
           ...prevDetails,
           [name]: value.split("\n").map((feature) => feature.trim()),
         }));
       } else {
         setPropertyForm((prevDetails) => ({
           ...prevDetails,
           [name]: value,
         }));
       }
     };

     const handleImageChange = (event) => {
        const file = event.target.files[0];
       setPropertyForm({
         ...propertyForm,
         property_image: file,
       });
     };


     const handleSubmit = (e) => {
       e.preventDefault();
       const formData = new FormData();
       Object.keys(propertyForm).forEach((key) => {
         if (key === "property_image") {
           formData.append(key, propertyForm[key]);
         } else if (key === "features") {
           formData.append(key, propertyForm[key].join("\n"));
         } else {
           formData.append(key, propertyForm[key]);
         }
       });
       dispatch(createProperty({ values: formData,setOpenForm }));
     };
  return (
    <>
      {open &&  (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "auto",
            padding: "16px",
            
          }}
        >
            <TextField
              label="Property Name"
              variant="outlined"
              name="property_name"
              value={propertyForm.property_name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="property-type">Property Type</InputLabel>
              <Select
                label="Property Type"
                id="property-type"
                name="property_type"
                value={propertyForm.property_type}
                onChange={handleInputChange}
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="home">Home</MenuItem>
                <MenuItem value="mansion">Mansion</MenuItem>
              </Select>
            </FormControl>
            <TextField
              accept="image/*"
              type="file"
              onChange={handleImageChange}
              fullWidth
              margin="normal"
              helperText="Property Image"
            />
            <TextField
              label="Address"
              variant="outlined"
              name="address"
              value={propertyForm.address}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="City"
              variant="outlined"
              name="city"
              value={propertyForm.city}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="State"
              variant="outlined"
              name="state"
              value={propertyForm.state}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Country"
              variant="outlined"
              name="country"
              value={propertyForm.country}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Pin Code"
              variant="outlined"
              name="pin_code"
              value={propertyForm.pin_code}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Features"
              variant="outlined"
              name="features"
              value={propertyForm.features.join("\n")}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button onClick={() => setOpenForm(!open)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
        </Box>
      )}
    </>
  );
}

export default PropertyFormComp