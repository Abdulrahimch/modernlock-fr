import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, makeStyles, Grid, Paper, Card, CardContent, CardActions, Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";
import useStyles from "./useStyles";
import InputBase from '@material-ui/core/InputBase';
import {  withStyles } from '@material-ui/core/styles';
import { getProperties } from "../../helpers/APICalls/properties";
import { useSnackBar } from "../../context/useSnackbarContext";
import { useHistory } from "react-router-dom";
import CustomDialog from "../../components/CustomDialog/CustomDialog";
import AddReservation from "./AddUpdateCalendar/AddReservation";
import { Property } from "../../interface/Property";
import { getReservations, removeReservation } from "../../helpers/APICalls/reservation";
import { Reservation } from "../../interface/Reservation";
import ChooseComponent from "../../components/ChooseComponent/ChooseComponent";
import UpdateReservation from "./AddUpdateCalendar/UpdateReservation";

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
    const [properties, setProperties] = useState<Property[] | undefined>();
    const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [calendarEvents, setCalendarEvents] = useState<any []>([]);
    const [openUpdateDelete, setOpenUpdateDelete] = useState<boolean>(false);
    const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);

    
    

    const handleChange = (event: any) => {
        setSelectedPropertyId(event.target.value);
    };

    const onAddReservationClick = () => {
        if (!selectedPropertyId) {
            updateSnackBarMessage("please select a property");
            return 
        }
        setOpen(true)
    };

    const onSelectEvent = (EventInt: any) => {
        setSelectedEvent(EventInt);
        setOpenUpdateDelete(true);
    }

    const updateCalendarEvents = (event: any, option: "update" | "delete") => {
        let newEvents = []
        switch(option) {
            case "update":
                newEvents = calendarEvents.map((e: any) => {
                    if (e._id === event._id) return { ...e, ...event }
                    return e;
                })
                console.log("new events: ", newEvents)
                setCalendarEvents(newEvents);
                onClose();
                break;

            case "delete": 
                newEvents = calendarEvents.filter((e:any) => {return  e._id !== event._id });
                setCalendarEvents(newEvents);
                onClose();
                break;
            default:
                newEvents = [];
                break;

        }
    } 

    const onClose = () => { setOpen(false);  setOpenUpdateDelete(false); setOpenUpdateDialog(false); };

    useEffect(() => {
        getProperties().then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                if (data.success?.properties && data.success?.properties.length > 0) {
                    setProperties(data.success?.properties)
                    setSelectedPropertyId(data.success.properties[0]._id)
                }
                else {
                    setProperties([])
                    setSelectedPropertyId("")
                }
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }, [history])

    useEffect(() => {
        getReservations(selectedPropertyId).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success) {
                let events: any[] = []
                data.success?.reservations && data.success?.reservations.map((res: Reservation, idx: number) => {
                    let event = {
                        id: idx+1,
                        title: res.name,
                        start: new Date(res.checkin),
                        end: new Date(res.checkout),
                        tooltip: 'Details about Meeting 1',
                        editable: true,
                      }
                    events.push({ ...event, ...res })
                })
                setCalendarEvents(events)
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
            // return () => {
            //     setCalendarEvents([])
            // };
        });
    }, [selectedPropertyId, calendarEvents])

    const UpdateReservationFunc = () => {
        setOpenUpdateDialog(true);
    }

    const deleteReservation = () => {
        console.log("delete reservation clicked")
        selectedEvent && removeReservation(selectedEvent._id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                updateCalendarEvents(data.success?.reservation, "delete");
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }

    const ChooseComponentButtons = [
        {
            text: "update reservation",
            func: UpdateReservationFunc,
            clsxText: "update"
        },
        {
            text: "delete reservation",
            func: deleteReservation,
            clsxText: "cancel"
        },
    ]

    return (
        <>
        <Paper style={{ height: "100vh" }}>
            <Grid container direction="column" alignContent="center" justifyContent="center" spacing={6} style={{ height: "70vh" }}>
                <Grid item className={classes.title}>
                    calendar
                </Grid>
                <Grid item container justifyContent="space-around" alignItems="center">
                    <Grid item>
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
                                value={selectedPropertyId}
                                onChange={handleChange}
                                classes={{ select: classes.select }}
                            >
                                {properties && properties.map((property, idx) => (
                                    <MenuItem key={idx+1} value={property._id} style={{ minWidth: 425 }}>{property.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button style={{ backgroundColor: "blue", padding: "1em", color: "white"  }} onClick={onAddReservationClick}>Add reservation</Button>
                    </Grid>
                </Grid>
                <Grid item style={{ width: "100%" }}>
                    <CustomCalendar events={calendarEvents} onSelectEvent={onSelectEvent} />
                </Grid>
                <CustomDialog open={open} onClose={onClose}>
                    <AddReservation propertyId={selectedPropertyId}/>
                </CustomDialog>
                <CustomDialog open={openUpdateDialog} onClose={onClose}>
                    <UpdateReservation reservation={selectedEvent} updateCalendarEvents={updateCalendarEvents}/>
                </CustomDialog>
                <CustomDialog open={openUpdateDelete} onClose={onClose}>
                    <ChooseComponent buttons={ChooseComponentButtons} text={"What would you like to do?"}/>
                </CustomDialog>
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