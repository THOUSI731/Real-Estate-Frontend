import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UnitFormData = ({setModalOpen}) => {
    var open=true
    const [formData,setFormData]=React.useState({

    })
    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={() => setModalOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
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
                name="rent_cost"
                value={formData.rent_cost}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="property-type">Property Type</InputLabel>
                <Select
                  label="Property Type"
                  id="property-type"
                  name="unit_type"
                  value={formData.property_type}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1bhk">1 BHK</MenuItem>
                  <MenuItem value="2bhk">2 BHK</MenuItem>
                  <MenuItem value="3bhk">3 BHK</MenuItem>
                  <MenuItem value="4bhk">4 BHK</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="property-type">Property Type</InputLabel>
                <Select
                  label="Property Type"
                  id="property-type"
                  name="unit_status"
                  value={formData.unit_status}
                  onChange={handleInputChange}
                >
                  <MenuItem value="available">Available</MenuItem>
                  <MenuItem value="occupied">Occupied</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Address"
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Features"
                variant="outlined"
                name="features"
                value={formData.features.join("\n")}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Button onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default UnitFormData;
