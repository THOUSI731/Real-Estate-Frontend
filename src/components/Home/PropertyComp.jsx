import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const PropertyComp = ({path}) => {
    const navigate = useNavigate()
    const handleNavigate = () => navigate("/property/123")
    // const dispatch=useDispatch()
    // useEffect(()=>{
    //     dispatch()
    // },[])
  return (
    <>
      {path === "/properties" ? (
        <>
        <Typography margin={2} variant='h4'>
            Properties
        </Typography>
        <Grid container spacing={2} padding={1}>
          <Grid item xs={12} gap={2}>
            <CardActionArea onClick={handleNavigate}>
              <Card sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  sx={{ width: "20%" }}
                  component="img"
                  height="194"
                  image="https://images.unsplash.com/photo-1486663845017-3eedaa78617f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Paella dish"
                />
                <CardContent>
                    <Typography>
                        Thousi
                    </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
        </>
      ) : null}
    </>
  );
}

export default PropertyComp