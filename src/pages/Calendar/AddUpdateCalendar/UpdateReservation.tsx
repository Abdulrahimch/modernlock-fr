import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { fetchTourApi, updateTour } from '../../../../helpers/APICalls/tour';
import { Box, Typography } from '@material-ui/core';
import BusinessTourForm from './ReservationForm';
import useStyles from './useStyles';
import { Reservation } from '../../../interface/Reservation';
import { useSnackBar } from '../../../context/useSnackbarContext';
import CustomCircularProgress from '../../../components/CustomCircularProgress/CustomCircularProgress';
import ReservationForm from './ReservationForm';
import { updateReservation } from '../../../helpers/APICalls/reservation';

interface Props {
    reservation: any;
    updateCalendarEvents: (event: any, option: "update" | "delete") => void
}

const UpdateReservation = ({ reservation, updateCalendarEvents }: Props) => {
    const { root, mainTitle } = useStyles();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);

    const { updateSnackBarMessage } = useSnackBar(); 

    console.log("from update reservation component: ", reservation)

    const handleSubmit = (inputs: any) => {
        setIsBtnLoading(true);
        updateReservation(reservation._id, inputs).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
                setIsBtnLoading(false);
            } else if (data.success) {
                updateSnackBarMessage('Data has been updated successfully!');
                updateCalendarEvents(data.success?.reservation, "update");
                setIsBtnLoading(false);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
                setIsBtnLoading(false);
            }
        });
    }


    return (
        <>
            <Box className={root}>
                <Typography className={mainTitle}>
                    Update Reservation
                </Typography>
                <ReservationForm 
                    handleSubmit={handleSubmit} 
                    reservation={reservation} 
                    isBtnLoading={isBtnLoading} 
                />
            </Box>
        </>
    )
};

export default UpdateReservation;