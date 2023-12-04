import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useStyles from './useStyles';
import ReservationForm from './ReservationForm';
import { Reservation } from '../../../interface/Reservation';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { postReservation } from '../../../helpers/APICalls/reservation';

const reservation: Reservation = {
    name: '',
    checkin: '',
    checkout: "",
    propertyId: '',
    reservationId: "",
    email: ""
}

interface Props {
    propertyId: string
}

const AddReservation = ({ propertyId }: Props) => {
    const { root, mainTitle } = useStyles();
    const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);
    const history = useHistory();
    const { updateSnackBarMessage } = useSnackBar()
    

    const handleSubmit = (inputs: any) => {
        setIsBtnLoading(false);
        if (!propertyId) {
            updateSnackBarMessage("Please select a property")
            return;
        }
        postReservation(propertyId, inputs).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
                setIsBtnLoading(true);
            } else if (data.success) {
                updateSnackBarMessage('Data has been stored successfully!');
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
                setIsBtnLoading(true);
            }
        });
    };

    return (
        <>
            <Box className={root}>
                <Typography className={mainTitle}>
                    Add Reservation
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

export default AddReservation;