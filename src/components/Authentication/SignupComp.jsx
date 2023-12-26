import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authActions";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const SignupComp = ({path}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch()
  const [formData,setFormData]=useState({})
  const {loading,error,success}=useSelector((state)=>state.auth)
  const [open, setOpen] = useState(true);
  const handleInputChange = (e) => {
    const {name,value}=e.target
    setFormData({
        ...formData,
        [name]:value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(registerUser({values:formData}))
  }
  const navigate=useNavigate()
  useEffect(()=>{
    if(success){
        navigate(`/login?success=${success}`)
    }
  },[success])
  console.log(formData);
  return (
    <>
      {path === "/register" ? (
        <>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form onSubmit={handleSubmit}>
              <Box sx={style}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic-1"
                      label="First Name"
                      required
                      variant="outlined"
                      name="first_name"
                      fullWidth
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic-2"
                      label="Last Name"
                      variant="outlined"
                      name="last_name"
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic-3"
                      label="Email"
                      required
                      variant="outlined"
                      name="email"
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6} em>
                    <TextField
                      id="outlined-basic-4"
                      label="Phone Number"
                      required
                      variant="outlined"
                      name="phone_number"
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    {" "}
                    <TextField
                      id="outlined-basic-5"
                      label="Username"
                      required
                      variant="outlined"
                      name="username"
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel htmlFor="outlined-adornment-password-1">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        defaultValue={"admin"}
                        id="outlined-adornment-password-1"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        name="password"

                        onChange={(e)=>setFormData({...formData,password:e.target.value})}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel htmlFor="outlined-adornment-password-2">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password-2"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm Password"
                        name="password2"
                        onChange={handleInputChange}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Button variant="outlined" onClick={() => setOpen(!open)} fullWidth sx={{marginBottom:1}}>Cancel</Button>
                    <Button type="submit" variant="contained" fullWidth>
                        Register
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default SignupComp;
