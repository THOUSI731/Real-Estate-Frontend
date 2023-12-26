import { Alert, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Modal, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { userLogin } from '../../features/auth/authActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const LoginComp = ({path}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [open,setOpen] = useState(true)
  try{
    var successParam=new URLSearchParams(location.success).get("success")
    console.log(successParam);
  }catch(error){
    console.log(error);
  }
  const [formData,setFormData]=useState({})
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(userLogin({email:formData.email,password:formData.password,navigate}))
  }
  return (
    <>
      {path === "/login" || successParam ? (
        <>
          <Modal
            open={open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form onSubmit={handleSubmit}>

            <Box
              sx={style}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              gap={2}
            >
              {successParam ? (
                <Alert severity="success">
                  User Registered Successfully
                </Alert>
              ) : null}
              <TextField
                id="outlined-basic"
                label="Email"
                required
                variant="outlined"
                name="email"
                onChange={handleChange}
              />
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  />
              </FormControl>
              <Button onClick={() => setOpen(!open)}>Cancel</Button>
              <Button type="submit">Login</Button>
            </Box>
      </form>

          </Modal>
        </>
      ) : null}
    </>
  );
}

export default LoginComp