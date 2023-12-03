import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { fetchTourApi, updateTour } from '../../../../helpers/APICalls/tour';
import { Box, Typography } from '@material-ui/core';
import BusinessTourForm from './ReservationForm';
import useStyles from './useStyles';
import { Reservation } from '../../../interface/Reservation';
import { useSnackBar } from '../../../context/useSnackbarContext';
import CustomCircularProgress from '../../../components/CustomCircularProgress/CustomCircularProgress';

const UpdateReservation = () => {
    // const { root, mainTitle } = useStyles();
    // const params = useParams();
    // const { tourId } = Object(params);
    // const [tour, setTour] = useState<Tour>();
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    // const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);

    // const { updateSnackBarMessage } = useSnackBar(); 

    // const handleSubmit = (inputs: any) => {
    //     setIsBtnLoading(true);
    //     const id = tour?._id;
    //     {id && updateTour(id, inputs).then((data) => {
    //         if (data.error) {
    //             updateSnackBarMessage(data.error.message);
    //             setIsBtnLoading(false);
    //         } else if (data.success) {
    //             updateSnackBarMessage('Data has been updated successfully!');
    //             setIsBtnLoading(false);
    //         } else {
    //             updateSnackBarMessage('An unexpected error occurred. Please try again !');
    //             setIsBtnLoading(false);
    //         }
    //     });}
    // }

    // useEffect(() => {
    //     fetchTourApi(tourId).then((data) => {
    //         if (data.error) {
    //             updateSnackBarMessage(data.error.message);
    //             setIsLoading(false);
    //         } else if (data.success){
    //             setTour(data.success.tour);
    //             setIsLoading(false);
    //         } else {
    //             updateSnackBarMessage('An unexpected error occurred. Please try again !');
    //             setIsLoading(false);
    //         }
    //     });
    // }, [updateSnackBarMessage]);

    // return (
    //     <>
    //         {isLoading ? <CustomCircularProgress style='center' /> : <Box className={root}>
    //             <Typography className={mainTitle}>
    //                 Update Tour
    //             </Typography>
    //             {tour && <BusinessTourForm handleSubmit={handleSubmit} tour={tour} isBtnLoading={isBtnLoading}/>}            </Box>}
    //     </>
    // )
};

export default UpdateReservation;