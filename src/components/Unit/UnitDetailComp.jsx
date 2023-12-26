import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUnit } from '../../features/units/unitDetailAction';

const UnitDetailComp = () => {
      const { id, unit_id } = useParams();
      const dispatch = useDispatch();
      const {unitDetails,loading}=useSelector((state)=>state.unitDetails)
      useEffect(() => {
        dispatch(getUnit({ id, unit_id }));
      }, []);
      console.log(unitDetails);
  return (
    <>
      {unitDetails && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"flex-start"} m={5}>
              <Card>
                <CardContent>
                  <Typography>Occupied By</Typography>
                  {unitDetails.tenant_agreements?.map((value) => (
                    <div key={value.id}>
                      <img
                        src={value.tenant.profile.profile_picture}
                        width={"400"}
                      />
                      <Typography>
                        Full Name : {value.tenant?.full_name}
                      </Typography>
                      <Typography>Email : {value.tenant?.email}</Typography>
                      <Typography>
                        Phone Number : {value.tenant?.phone_number}
                      </Typography>
                      <Typography>
                        Address : {value.tenant.profile.address}
                      </Typography>
                      <Typography>
                        City : {value.tenant.profile.city}
                      </Typography>
                      <Typography>
                        State : {value.tenant.profile.state}
                      </Typography>
                      <Typography>
                        Country : {value.tenant.profile.country}
                      </Typography>
                      <Typography>Agreement</Typography>
                      <Typography>Start Date : {value.start_date}</Typography>
                      <Typography>End Date : {value.end_date}</Typography>
                      <Typography>
                        Monthly Rent Date : {value.monthly_rent_date}
                      </Typography>
                      <Typography>
                        User Documents
                      </Typography>
                      {value.tenant.documents.map((value) => (
                        <div key={value.document_number}>
                          <Typography>Document Name : {value.document_name}</Typography>
                          <Typography>Document Number : {value.document_number}</Typography>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default UnitDetailComp