import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, makeStyles, Grid, Paper, Card, CardContent, CardActions, Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";
import useStyles from "./useStyles";
import InputBase from '@material-ui/core/InputBase';
import {  withStyles } from '@material-ui/core/styles';
import { getProperties } from "../../helpers/APICalls/properties";
import { useSnackBar } from "../../context/useSnackbarContext";
import { useHistory } from "react-router-dom";

  const properties = [
    {
        name: "apartm 01",
        photo: ""
    },
    {
        name: "apartm 2+1",
        photo: ""
    },
    {
        name: "5",
        photo: ""
    },
    {
        name: "6",
        photo: ""
    }
]

const Calendar = () => {
    const classes = useStyles();
    const { updateSnackBarMessage } = useSnackBar();
    const history = useHistory();
    const [properties, setProperties] = useState<any[] | undefined>()

    const handleChange = () => {
        console.log("handlechange")
    }

    useEffect(() => {
        getProperties().then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                setProperties(data.success?.properties)
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }, [history])

    return (
        <>
        <Paper style={{ height: "100vh" }}>
            <Grid container direction="column" alignContent="center" justifyContent="center" spacing={6} style={{ height: "70vh" }}>
                <Grid item className={classes.title}>
                    calendar
                </Grid>
                <Grid item container justifyContent="space-around">
                    <FormControl style={{ margin: "1em" }}>
                        <InputLabel>Select a property</InputLabel>
                        <Select
                                id="type"
                                name="type"
                                autoWidth
                                disableUnderline
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left"
                                    },
                                    getContentAnchorEl: null
                                }}
                                value={10}
                                onChange={handleChange}
                                classes={{ select: classes.select }}
                            >
                            
                            {properties && properties.map((property, idx) => (
                                <>
                                    <MenuItem key={idx} value={property._id}>{property.name}</MenuItem>
                                </>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item style={{ width: "100%" }}>
                    <CustomCalendar events={[]} />
                </Grid>
            </Grid>
        </Paper>
            
        </>
      
        // <>
        //     <Paper style={{ height: "100vh" }}>
        //         <Grid container justifyContent="center" alignItems="center">
        //             <Typography className={classes.title}>Calendar</Typography>
        //             <Grid item xs={12} sm={12} md={12} lg={12}>
        //                 <List className={classes.list}>
        //                     {properties.map((property, idx) => (
        //                         <>
        //                             <ListItem alignItems="flex-start" >
        //                                 {/* <ListItemAvatar>
        //                                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        //                                 </ListItemAvatar>
        //                                 <Typography>
        //                                     {property.name}
        //                                 </Typography> */}
        //                                 <Card style={{ borderRadius: "25px", width: "75%" }}>
        //                                     <CardContent>
        //                                         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        //                                         <Typography gutterBottom style={{ fontWeight: 800, fontSize: 16, color: "red", marginBottom: "2em" }}>
        //                                             {property.name}
        //                                         </Typography>
        //                                     </CardContent>
        //                                     <CardActions>
        //                                         <Button size="small">View calendar</Button>
        //                                     </CardActions>
        //                                 </Card>
        //                             </ListItem>
        //                         </>
        //                     ))}
        //                 </List>
        //             </Grid>
        //         </Grid>
        //     </Paper>
        // </>
    )
    
}
  
  export default Calendar;