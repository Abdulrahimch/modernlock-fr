import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Typography, Box, InputLabel, Accordion, AccordionSummary, AccordionDetails, Button, CircularProgress, Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './useStyles';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import DeleteIcon from '@material-ui/icons/Delete';
import { FieldArray, Form, Formik } from 'formik';
import { useSnackBar } from '../../../../context/useSnackbarContext';
import { fetchTourApi, updateTourImages } from '../../../../helpers/APICalls/tour';
import { Tour } from '../../../../interface/Tour';
import CustomCircularProgress from '../../../../components/CustomCircularProgress/CustomCircularProgress';

const UpdateTourImages = () => {
    const { sectionTitle, iconStyle, fieldInputLabel, form, submit, progressStyle } = useStyles();

    const [change, setChange] = useState(0);
    const [tour, setTour] = useState<Tour>();
    const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);
    const { updateSnackBarMessage } = useSnackBar();  
    const params = useParams();
    const { tourId } = Object(params);
    const history = useHistory();

    const deleteItem = (event:any, array: any [], index: number) => {
        event.preventDefault();
        if (typeof(array[index]) === 'string' && array[index].length > 0)
             array[index] = 0;
        else array.pop()
        setChange(change+1);
    };

    const addNewItem = (event: any, array: any[]) => {
        event.preventDefault(); 
        array.push('');
        setChange(change+1)
    };

    const handleSubmit = (values: any) => {
        setIsBtnLoading(true);
        const data = new FormData();

        for (let idx in values.imageList) {
            data.append('imageList', values.imageList[idx]);
        };
        
        
        {tourId && updateTourImages(tourId, data).then((data) => {
                if (data.error) {
                    updateSnackBarMessage(data.error.message);
                    setIsBtnLoading(false);
                } else if (data.success) {
                    updateSnackBarMessage('Images have been stored successfully!');
                    setIsBtnLoading(false);
                    history.push('/tours-setup');
                } else {
                    updateSnackBarMessage('An unexpected error occurred. Please try again !');
                    setIsBtnLoading(false);
                }
            });
        }
    };

    useEffect(() => {
        fetchTourApi(tourId).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                setTour(data.success.tour);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }, [updateSnackBarMessage]);

    return (
        <>
            {tour && <Formik
                initialValues={{
                    imageList: tour.imageList

                }}
                onSubmit={(values) => { handleSubmit(values) }}
            >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting, setFieldValue }) => (
            <Box style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                <form onSubmit={handleSubmit} className={form} style={{ marginTop: '5em' }} noValidate>
                <FieldArray name="imageList">
                        {
                            (fieldArrayProps ) => {
                                const { form } = fieldArrayProps;
                                const { values } = form;
                                const { imageList } = values;

                                return (
                                    <Form style={{ width: '100%', padding: '0.1em' }}>
                                        <Box>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography variant='h4'>Images</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Box display='flex' flexDirection='column'>
                                                        <Box display='flex' flexDirection='column'>
                                                        <Typography className={sectionTitle}>Note: The first image will be the main Image.</Typography>
                                                            {imageList.map((img: any, index: number) => (
                                                                img === 0 ? null : <Box key={index}>
                                                                    <InputLabel className={fieldInputLabel}>
                                                                        Image {index + 1}
                                                                    </InputLabel>
                                                                    <input
                                                                        id={`imageList[${index}]`}
                                                                        name={`imageList[${index}]`}
                                                                        type='file'
                                                                        accept='image/*'
                                                                        onChange={(event: any) => {
                                                                            setFieldValue(`imageList[${index}]`, event.target.files[0])
                                                                        }}
                                                                    />
                                                                    <img src={img} style={{ width: 50, height: 50 }} />
                                                                    <DeleteIcon onClick={(event: any) => deleteItem(event, imageList, index)} />
                                                                </Box>
                                                            ))}
                                                                <AddToPhotosIcon 
                                                                    className={iconStyle} 
                                                                    onClick={(event:any) => addNewItem(event, imageList)} 
                                                                />
                                                        </Box>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Box>
                                    </Form>
                                )   
                            }
                        }
                    </FieldArray>
                    <Button type='submit' className={submit}>{isBtnLoading ? <CircularProgress className={progressStyle}/> : 'Submit'}</Button>
                </form>
            </Box>
            )}
        </Formik>}
    </>

    )
};

export default UpdateTourImages