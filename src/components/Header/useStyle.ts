import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btnStyle: {
        fontSize: 12,
        fontWight: 18,
        margin: "10px",
        color: "#000000"
    },
    header: {
        "&.subHeader": {
            backgroundColor: "#FFFFFF",
            border: "1px solid #000000"
        }
    }
    

}));

export default useStyles;