import { useState } from 'react';
import useStyles from './useStyles';
import { Grid, Typography, Box, TextField, InputLabel, Button, Accordion, AccordionSummary, AccordionDetails, CircularProgress, Select, MenuItem, Slider } from '@material-ui/core';
import { Field, FieldArray, Form, Formik } from 'formik';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import DeleteIcon from '@material-ui/icons/Delete';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../../components/theme';
import * as Yup from 'yup';
import CustomCircularProgress from '../../../components/CustomCircularProgress/CustomCircularProgress';
import { Reservation } from '../../../interface/Reservation';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    DatePicker
  } from '@material-ui/pickers';

interface Props {
    reservation: Reservation;
    handleSubmit: (inputs: any) => void;
    isBtnLoading: boolean
};

const ReservationForm = ({ handleSubmit, reservation, isBtnLoading }: Props) => {
    const { boxGridItem, inputs, select, iconStyle,
            fieldInputLabel, form, itemContainer, submit, progressStyle, dateSytle } = useStyles();
    
    const [test, setTest] = useState(0);
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const deleteItem = (event:any, array: any [], index: number) => {
        event.preventDefault(); 
        array.splice(index, 1); 
        setTest(test+1)
    };

    const addNewItem = (event: any, array: any[]) => {
        event.preventDefault(); 
        array.push(''); 
        setTest(test+1)
    };
////////////////////////////////////////////////
    const language = 'english'

    interface Properties {
        [key: string]: string
    }

    interface Titles {
        [key: string]: Properties
    }

    const titles: Titles = {
        'english':
            {
                showProgram: 'Show Program',
                highlights: 'Highlights',
                dinnerProgram: 'Dinner Program',
                includes: 'What is included ?',
                notIncluded: 'what is not included ?',
                notSuitableFor: 'Not Suitable For',
                allowed: 'What is allowed ?',
                notAllowed: 'What is not allowed ?',
                closed: 'Closed',
                payment: 'Payment',
                languages: 'Languages'
            }
    };

    const titlesToRender = titles[language]
//////////////////////////////////////////////////////////////////


    const updateProperty = (propertyName: string, propertyArray: string [],) => {
        propertyName.toString();
        const index = propertyName
        return (
            <>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant='h4'>{titlesToRender[index]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box display='flex' flexDirection='column'>
                            {propertyArray.map((highlight: any, index: number) => (
                                <Box key={index} display='flex' justifyContent='center' alignItems='center'>
                                    <InputLabel className={fieldInputLabel}>
                                        {index + 1}
                                    </InputLabel>
                                    <Field
                                        id={`${propertyName}[${index}]`}
                                        name={`${propertyName}[${index}]`}
                                        className={select}
                                    />
                                    <DeleteIcon className={iconStyle} onClick={(event:any) => deleteItem(event, propertyArray, index)} />
                                </Box>
                            ))}
                            <AddToPhotosIcon className={iconStyle} onClick={(event:any) => addNewItem(event, propertyArray)} />
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </>
        )
    }
    
    return (
        <>
        {reservation && <Formik
                initialValues={{
                    name: reservation.name,
                    checkin: reservation.checkin,
                    checkout: reservation.checkout,
                    propertyId: reservation.propertyId,
                    reservationId: reservation.reservationId,
                    email: reservation.email

                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('Please enter a title'),
                    email: Yup.string().required('This field can not be blank'),
                    checkin: Yup.string().required('This field can not be blank eg (10:00)'),
                    checkout: Yup.string().required('This field can not be blank eg (18:00)'),
                })}
                onSubmit={(values) => {handleSubmit(values)}}
            >
        {({ handleSubmit, handleChange, values, touched, errors, isSubmitting, setFieldValue }) => (
            <Box style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                <form onSubmit={handleSubmit} className={form} style={{ marginTop: '5em' }} noValidate>
                <Grid item container direction='column' className={itemContainer} spacing={4} xs={12}>
                    <Grid item container direction={ matches ? "column" : 'row' } justifyContent='space-evenly'>
                        <Box className={boxGridItem}>
                             <InputLabel>
                               Name
                            </InputLabel>
                            <TextField
                                id="name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                error={Boolean(errors.name)}
                                helperText={errors.name}
                                InputProps={{
                                    classes: { input: inputs },
                                    disableUnderline: true
                                }}
                            />
                        </Box>
                        <Box className={boxGridItem}>
                            <InputLabel>
                                Email
                            </InputLabel>
                            <TextField
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                                InputProps={{
                                    classes: { input: inputs },
                                    disableUnderline: true
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item container direction={ matches ? "column" : 'row' }>
                        <Grid item>
                            <InputLabel>
                                Checkin
                            </InputLabel>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    InputProps= {{
                                        classes: { input: dateSytle },
                                        disableUnderline: true
                                    }}
                                    value={values.checkin}
                                    style={{ marginTop: 2 }}
                                    onChange={(date: any) => setFieldValue('checkin', date)}
                            />
                            </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item>
                                <InputLabel>
                                    Checkout
                                </InputLabel>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        InputProps= {{
                                            classes: { input: dateSytle },
                                            disableUnderline: true
                                        }}
                                        value={values.checkout}
                                        style={{ marginTop: 2 }}
                                        onChange={(date: any) => setFieldValue('checkout', date)}
                                />
                                </MuiPickersUtilsProvider>
                            </Grid>
                    </Grid>
                    
                </Grid>
                    <Button 
                        type="submit" 
                        className={submit}>
                            {isBtnLoading ? <CircularProgress className={progressStyle} /> : 'Submit'}
                        </Button>
                </form>
            </Box>
            )}
            </Formik>}
        </>
    )
};

export default ReservationForm;