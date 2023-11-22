import { Grid, Paper, Typography } from "@material-ui/core";
import SubHeader from "../../components/Header/SubHeader";
import { ButtonInterface } from "../../interface/SubHeader";
import { useHistory } from "react-router";
import useStyles from "./useStyles";

const Home = () => {
    const history = useHistory();
    const { root } = useStyles();
    const buttons: ButtonInterface[] = [
        {btnText: "today", onBtnClick: () => {history.push("/today")}}, 
        {btnText: "calender", onBtnClick: () => {history.push("/calender")}}
    ];

    const buttonTabs: ButtonInterface[] = [
        {btnText: "currently hosting", onBtnClick: () => {console.log("/currently hosting")}}, 
        {btnText: "upcoming", onBtnClick: () => {console.log("/upcoming")}}
    ];

    return (
        <>
            <SubHeader style="subHeader" buttons={buttons} />
            <Grid container direction="column" alignItems="center" component={Paper} spacing={2} className={root}>
                <Grid>
                    <Typography>Welcome back, Abdulrahim</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="flex-start" spacing={2}>
                        <Grid item>
                            <Typography>Your reservations</Typography>
                        </Grid>
                        <Grid item>
                            <SubHeader style="btnTabStyle" buttons={buttonTabs} />
                        </Grid>
                        <Grid item>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default Home;