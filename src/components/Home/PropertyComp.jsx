import { Alert, AlertTitle, Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { api } from '../../common/axiosPrivate';
import NavbarComp from './NavbarComp';
import { listProperties } from '../../features/properties/propertyActions';
import PropertyFormComp from '../Property/PropertyFormComp';

const PropertyComp = ({path}) => {
    const navigate = useNavigate()
    const [search,setSearch]=useState("")
    const [openForm,setOpenForm]=useState(false)
    const handleNavigate = (id) => navigate(`/property/${id}`)
    const {property,loading,message}=useSelector((state)=>state.property)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(listProperties({search}))
    },[search])
    const handleSearchChange = (e) => {
      setSearch(e.target.value)
    }
    const handleFormClick = () => {
      setOpenForm(true)
    }
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
      {path === "/" ? (
        <>
          {loading ? (
            <Typography>Loading</Typography>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography margin={2} variant="h4">
                  Properties
                </Typography>
                <Button
                  sx={{ marginLeft: 0 }}
                  variant="contained"
                  onClick={handleFormClick}
                >
                  Add Property
                </Button>
              </div>
              {message && (
                <Alert severity="success">
                  <AlertTitle>{message}</AlertTitle>
                </Alert>
              )}
              {openForm ? (
                <PropertyFormComp open={openForm} setOpenForm={setOpenForm} />
              ) : (
                <Grid container spacing={2} padding={1}>
                  {property &&
                    property.property?.map((property) => (
                      <Grid item xs={12} gap={2} key={property.id}>
                        <CardActionArea
                          onClick={() => handleNavigate(property.id)}
                        >
                          <Card sx={{ display: "flex", flexDirection: "row" }}>
                            <CardMedia
                              sx={{ width: "20%" }}
                              component="img"
                              height="194"
                              image={property.property_image}
                              alt={property.name}
                            />
                            <CardContent>
                              <Typography>{property.name}</Typography>
                              <Typography>
                                {property.property_type.toUpperCase()}
                              </Typography>
                              <Stack direction="row" spacing={1}>
                                {property.features.map((feature) => (
                                  <Chip
                                    key={feature.id}
                                    label={feature.name}
                                    color="primary"
                                  />
                                ))}
                              </Stack>
                            </CardContent>
                          </Card>
                        </CardActionArea>
                      </Grid>
                    ))}
                </Grid>
              )}
            </>
          )}
        </>
      ) : null}
    </>
  );
}

export default PropertyComp