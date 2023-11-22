import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    circularProgress: {
        color: theme.palette.common.white,
    },
    button: {
        textTransform: 'capitalize',
        borderRadius: theme.shape.borderRadius,
        fontSize: 12,
        fontWeight: 600,
        padding: theme.spacing(1),
        '&.submit': {
            backgroundColor: theme.palette.primary.main,
            margin: theme.spacing(6, 2, 2),
            width: 160,
            height: 56,
        },
        '&.update': {
            backgroundColor: "#006400",
            width: 40,
            height: 10,
            margin: 2
        },
        '&.delete': {
            backgroundColor: '#8B0000',
            width: 40,
            height: 10,
            margin: 2
        },
        '&.yes': {
            backgroundColor: "#006400",
            width: 75,
            height: 40,
            marginRight: '1em'
        },
        '&.no': {
            backgroundColor: '#8B0000',
            width: 75,
            height: 40,
        },
        '&.searchButton': {
            backgroundColor: "#006400",
            width: 75,
            height: 40
        },
        '&.details': {
            backgroundColor: '#FF8C00',
            width: 40,
            height: 10,
            marginBottom: 5
        },
        '&.addAgentBtn': {
            backgroundColor: "#006400",
            marginRight: theme.spacing(2),
            flex: 1,
            width: 120,
            height: 56,
        },
        "&.btnTabStyle": {
            border: "1px solid #000000",
            borderRadius: "15px",
            fontSize: 16,
            fontWeight: 400,
            backgroundColor: "#FFFFFF",
            margin: "0.5em",
            padding: theme.spacing(1)
            // margin: "1em"
        }

    },
}));

export default useStyles;