import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { createUnit } from "../../features/properties/propertyDetailAction";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../../features/users/userAction";

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

const UnitFormData = ({id,modalOpen,setModalOpen}) => {
    const {users}=useSelector((state)=>state.users)
    const [formData,setFormData]=React.useState({
        unit_type:"",
        rent_cost:"",
        features:[],
        unit_status:"",
        user:"",
        start_date:new Date(),
        end_date:new Date(),
        monthly_rent_date:new Date()
    })
    const handleInputChange = (event) => {
      const { name, value } = event.target;

      if (name === "features") {
        setFormData((prevDetails) => ({
          ...prevDetails,
          [name]: value.split("\n").map((feature) => feature.trim()),
        }));
      } else {
        setFormData((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      }
    };
    const dispatch=useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(createUnit({id,values:formData}))
    }
    React.useEffect(()=>{
        dispatch(listUsers())
    },[])
    console.log(users);

  return (
    <>
      <div>
        <Modal
          open={modalOpen}
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
                label="Rent Cost"
                variant="outlined"
                name="rent_cost"
                value={formData.rent_cost}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="property-type">Unit Type</InputLabel>
                <Select
                  label="Unit Type"
                  id="unit-type"
                  name="unit_type"
                  value={formData.unit_type}
                  onChange={handleInputChange}
                >
                  <MenuItem value="1bhk">1 BHK</MenuItem>
                  <MenuItem value="2bhk">2 BHK</MenuItem>
                  <MenuItem value="3bhk">3 BHK</MenuItem>
                  <MenuItem value="4bhk">4 BHK</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="property-type">Unit Status</InputLabel>
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
                label="Features"
                variant="outlined"
                name="features"
                // value={formData.features.join("\n")}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="user-list">User List</InputLabel>
                <Select
                  label="User List"
                  id="user-list"
                  name="user"
                  value={formData.user}
                  onChange={handleInputChange}
                >
                    {users && users.tenants?.length > 0 && users.tenants?.map((user)=>(
                        <MenuItem key={user.id} value={user.email}>{user.full_name}</MenuItem>

                    ))}
                </Select>
              </FormControl>
              <DatePicker
                name="start_date"
                sx={{ my: 1 }}
                onChange={(date) =>
                  setFormData({ ...formData, start_date: date })
                }
                slotProps={(props) => (
                  <TextField value={formData.start_date} {...props} />
                )}
              />
              <DatePicker
                name="end_date"
                sx={{ my: 1 }}
                onChange={(date) =>
                  setFormData({ ...formData, start_date: date })
                }
                slotProps={(props) => (
                  <TextField value={formData.start_date} {...props} />
                )}
              />
              <DatePicker
                name="monthly_rent_date"
                sx={{ my: 1 }}
                onChange={(date) =>
                  setFormData({ ...formData, start_date: date })
                }
                slotProps={(props) => (
                  <TextField value={formData.start_date} {...props} />
                )}
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
