import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const PropertDetailComp = () => {
  return (
    <>
      <Typography margin={2} variant="h4">
        Properties
      </Typography>
      <Grid container spacing={2} padding={1}>
        <Grid item xs={8} gap={2}>
            <Card sx={{ display: "flex", flexDirection: "row" }}>
              <CardMedia
                component="img"
                sx={{width:"40%"}}
                image="https://images.unsplash.com/photo-1486663845017-3eedaa78617f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Paella dish"
              />
              <CardContent>
                <Typography>Property Name : Thousi</Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4} gap={2}>
            <Card sx={{ display: "flex", flexDirection: "row" }}>
              <CardContent>
                <Typography>Thousi</Typography>
              </CardContent>
            </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default PropertDetailComp