export interface Reservation {
    _id?: string;
    email: string;
    name?: string;
    propertyId?: string;
    checkin: string;
    checkout: string;
    reservationId?: string;
};

interface ReservationApiDataSuccess {
    reservations?: Reservation[];
    reservation?: Reservation
}

export interface ReservationApiData {
    error?: { message: string };
    success?: ReservationApiDataSuccess;
};
  