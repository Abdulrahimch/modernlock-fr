import { useState } from 'react';
import useStyles from './useStyles';
import { Grid, Typography, Box, TextField, InputLabel, Button, Accordion, AccordionSummary, AccordionDetails, CircularProgress, Select, MenuItem, Slider } from '@material-ui/core';
import { Field, FieldArray, Form, Formik } from 'formik';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import DeleteIcon from '@material-ui/icons/Delete';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../../../components/theme';
import { Tour } from '../../../../interface/Tour';
import * as Yup from 'yup';
import CustomCircularProgress from '../../../../components/CustomCircularProgress/CustomCircularProgress';
import { Reservation } from '../../../interface/Reservation';

interface Props {
    reservation: Reservation;
    handleSubmit: (inputs: any) => void;
    isBtnLoading: boolean
};

const ReservationForm = ({ handleSubmit, reservation, isBtnLoading }: Props) => {
    const { boxGridItem, inputs, select, iconStyle,
            fieldInputLabel, form, itemContainer, submit, progressStyle } = useStyles();
    
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
                        
                        
                    </Grid>
                    <Grid item container direction={ matches ? "column" : 'row' }>
                        <Box className={boxGridItem}>
                            <InputLabel>
                                Adult Cost
                            </InputLabel>
                            <TextField
                                id="adultCost"
                                name="adultCost"
                                value={values.adultCost}
                                onChange={handleChange}
                                error={Boolean(errors.adultCost)}
                                helperText={errors.adultCost}
                                InputProps={{
                                    classes: { input: inputs },
                                    disableUnderline: true
                                }}
                            />
                        </Box>
                        <Box className={boxGridItem}>
                            <InputLabel>
                                Child Cost
                            </InputLabel>
                            <TextField
                                id="childCost"
                                name="childCost"
                                value={values.childCost}
                                onChange={handleChange}
                                error={Boolean(errors.childCost)}
                                helperText={errors.childCost}
                                InputProps={{
                                    classes: { input: inputs },
                                    disableUnderline: true
                                }}
                            />
                        </Box>
                        <Box className={boxGridItem}>
                            <InputLabel>
                               Currency
                            </InputLabel>
                            <Select
                                id="currency"
                                name="currency"
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
                                value={values.currency}
                                onChange={handleChange}
                                classes={{ select: select }}
                            >
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'EUR'}>EUR</MenuItem>
                                <MenuItem value={'TL'}>TL</MenuItem>
                            </Select>
                        </Box>
                        {/* <Box className={boxGridItem}>
                            <InputLabel>
                                Category
                            </InputLabel>
                            <Select
                                id="category"
                                name="category"
                                autoWidth
                                disableUnderline
                                error={Boolean(errors.category)}
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
                                value={values.category}
                                onChange={handleChange}
                                classes={{ select: select }}
                            >
                                <MenuItem value={'fullDay'}>Full Day</MenuItem>
                                <MenuItem value={'halfDay'}>Half Day</MenuItem>
                                <MenuItem value={'all'}>all</MenuItem>
                            </Select>
                        </Box> */}
                        <Box className={boxGridItem}>
                            <InputLabel>
                                Type
                            </InputLabel>
                            <Select
                                id="type"
                                name="type"
                                autoWidth
                                disableUnderline
                                error={Boolean(errors.type)}
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
                                value={values.type}
                                onChange={handleChange}
                                classes={{ select: select }}
                            >
                                <MenuItem value={'bosphorusTours'}>Bosphorus Tours</MenuItem>
                                <MenuItem value={'istanbulTours'}>Istanbul Tours</MenuItem>
                                <MenuItem value={'turkeyTours'}>Turkey Tours</MenuItem>
                            </Select>
                        </Box>
                        <Box className={boxGridItem}>
                            <InputLabel style={{ width: 150 }}>
                                Weight 
                            </InputLabel>
                            <Select
                                id="weight"
                                name="weight"
                                autoWidth
                                disableUnderline
                                error={Boolean(errors.weight)}
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
                                value={values.weight}
                                onChange={handleChange}
                                classes={{ select: select }}
                            >   
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                                        <MenuItem value={item}>{item}</MenuItem>
                                ))}
                                
                            </Select>
                        </Box>
                    </Grid>
                    <FieldArray name='tourDetails'>
                        {
                            (fieldArrayProps ) => {
                                const { form } = fieldArrayProps;
                                const { values } = form;
                                const { highlights, includes, showProgram,
                                        dinnerProgram, notIncluded, notSuitableFor,
                                        allowed, notAllowed, closed, payment, languages } = values;
                                
                                return ( 
                                    <Form style={{ width: '100%', padding: '0.1em' }}>
                                        <>
                                            <Box>
                                                {updateProperty('highlights', highlights)}
                                                {updateProperty('showProgram', showProgram)}
                                                {updateProperty('dinnerProgram', dinnerProgram)}
                                                {updateProperty('includes', includes)}
                                                {updateProperty('notIncluded', notIncluded)}
                                                {updateProperty('notSuitableFor', notSuitableFor)}
                                                {updateProperty('allowed', allowed)}
                                                {updateProperty('notAllowed', notAllowed)}
                                                {updateProperty('closed', closed)}
                                                {updateProperty('payment', payment)}
                                                {updateProperty('languages', languages)}
                                            </Box>
                                            
                                        </>
                                    </Form>
                                )   
                            }
                        }
                    </FieldArray>
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

export default BusinessTourForm;