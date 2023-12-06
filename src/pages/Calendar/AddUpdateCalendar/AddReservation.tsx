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
    propertyId: string;
    calendarEvents: any[];
}

function isDateBetween(targetDate: Date, startDate: Date, endDate: Date): boolean {
    const targetYear = targetDate.getFullYear();
    const targetMonth = targetDate.getMonth();
    const targetDay = targetDate.getDate();
  
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const startDay = startDate.getDate();
  
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    const endDay = endDate.getDate();
  
    // Check if targetDate falls between startDate and endDate (inclusive)
    return (
      targetYear >= startYear &&
      targetYear <= endYear &&
      targetMonth >= startMonth &&
      targetMonth <= endMonth &&
      targetDay >= startDay &&
      targetDay <= endDay
    );
  }

const AddReservation = ({ propertyId, calendarEvents }: Props) => {
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
        for (var event of calendarEvents) {
            console.log("event is: ", event, inputs)
            if ( (isDateBetween(inputs.checkin, event.start, event.end)) || (isDateBetween(inputs.checkout, event.start, event.end))) {
                console.log("why ? ", inputs, event)
                updateSnackBarMessage('Dates are not available!!!');
                return
            }
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