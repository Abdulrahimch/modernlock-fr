import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    dialog: {
        '&.bookShuttle': {
            overflowX: 'hidden',
        },
        '&.orderDetails': {
            overflow: 'hidden',
        },
        '&.listClients': {
            overflowX: 'hidden',
        },
        '&.latestOrderDetails': {
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
        },
    }
}));

export default useStyles;