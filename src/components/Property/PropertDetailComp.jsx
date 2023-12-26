import { useEffect } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getProperty } from '../../features/properties/propertyDetailAction';
import { useParams } from 'react-router-dom';

const PropertDetailComp = ({search}) => {

  const {id}=useParams()
  const dispatch =useDispatch()
  const { propertyDetails, loading } = useSelector(
    (state) => state.propertyDetails
  );
  useEffect(()=>{
    dispatch(getProperty({id,search}))
  },[search])
  console.log(propertyDetails);
  return (
    <>
      <Typography margin={2} variant="h4">
        Properties
      </Typography>
      {loading ? (
        <Typography>Loading</Typography>
      ) : (
        <>
        { propertyDetails ? (
          <Grid container spacing={2} padding={1}>
          <Grid item xs={12} md={8} gap={2}>
            <Card sx={{ display: "flex", flexDirection: "row" }}>
              <CardMedia
                component="img"
                sx={{ width: "40%" }}
                image={propertyDetails.property_image}
                alt={propertyDetails.name}
              />
              <CardContent>
                <Typography variant="h3">{propertyDetails.name}</Typography>
                <Typography>{propertyDetails.property_type}</Typography>
                <Typography>{propertyDetails.address}</Typography>
                <Typography>{propertyDetails.city}</Typography>
                <Typography>{propertyDetails.state}</Typography>
                <Typography>{propertyDetails.country}</Typography>
                <Typography>{propertyDetails.pin_code}</Typography>
                <Stack direction="row" spacing={1}>
                  {propertyDetails.features?.length > 0 &&
                    propertyDetails.features?.map((feature) => (
                      <Chip
                        key={feature.id}
                        label={feature.name}
                        color="primary"
                      />
                    ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
         {propertyDetails?.property_units && propertyDetails.property_units.length === 0 ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography sx={{ marginX: 15 }}>Units Not Available</Typography>
            </Box>
          ) : (
            <>
              <Grid item xs={4} gap={2} >
              {propertyDetails?.property_units?.map((unit) => (
                <Card sx={{ display: "flex", flexDirection: "row" }} key={unit.id}>
                  <CardContent>
                    <Typography>{unit?.unit_type}</Typography>
                    <Typography>{unit?.rent_cost}</Typography>
                    <Typography>{unit?.unit_status}</Typography>
                    <Stack direction="row" spacing={1}>
                      {unit.features?.length > 0 &&
                        unit.features?.map((feature) => (
                          <Chip
                            key={feature.id}
                            label={feature.name}
                            color="primary"
                          />
                        ))}
                    </Stack>
                    <Typography>
                      {unit?.tenant_agreement?.start_date}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
              </Grid>
            </>
          )}
        </Grid>
        ) :
         <Typography>No property details found</Typography>
        }
      </>
      )}
    </>
  );
}

export default PropertDetailComp