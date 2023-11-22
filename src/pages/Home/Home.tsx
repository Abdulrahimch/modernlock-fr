import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import SubHeader from "../../components/Header/SubHeader";
import { ButtonInterface } from "../../interface/SubHeader";
import { useHistory } from "react-router";
import useStyles from "./useStyles";
import CustomButton from "../../components/CustomButton/CustomButton";

const Home = () => {
    const history = useHistory();
    const { root, pageTitle } = useStyles();

    const buttons: ButtonInterface[] = [
        {btnText: "today", onBtnClick: () => {history.push("/today")}}, 
        {btnText: "calender", onBtnClick: () => {history.push("/calender")}}
    ];

    const buttonTabs: ButtonInterface[] = [
        {btnText: "currently hosting", onBtnClick: () => {console.log("/currently hosting")}}, 
        {btnText: "upcoming", onBtnClick: () => {console.log("/upcoming")}}
    ];

    const cards = [
        {status: "Currently hosting", name: "ahmed omran", from: "21 jan", to: "01 feb", roomNo: 16}, 
        {status: "Currently hosting", name: "ahmed omran", from: "21 jan", to: "01 feb", roomNo: 16},
        {status: "Currently hosting", name: "ahmed omran", from: "21 jan", to: "01 feb", roomNo: 16},
        {status: "Currently hosting", name: "ahmed omran", from: "21 jan", to: "01 feb", roomNo: 16}, 
        {status: "Currently hosting", name: "ahmed omran", from: "21 jan", to: "01 feb", roomNo: 16},
        {status: "Currently hosting", name: "ahmed omran", from: "21 jan", to: "01 feb", roomNo: 16}
    ]

    return (
        <>
            <Box style={{ marginBottom: "2em" }}>
                <SubHeader style="subHeader" buttons={buttons} />
            </Box>
            <Grid container direction="column" alignItems="center" justifyContent="center" component={Paper} spacing={8} className={root}>
                <Grid item>
                    <Typography className={pageTitle}>Welcome back, Abdulrahim</Typography>
                </Grid>
                <Grid item style={{ width: "100%" }}>
                    <Grid container direction="column" alignItems="center" spacing={4} style={{ width: "100%" }}>
                        <Grid item>
                            <Typography className={pageTitle}>Your reservations</Typography>
                        </Grid>
                        <Grid item style={{ marginLeft: 0 }}>
                            {buttonTabs.map(({ btnText, onBtnClick }) => (
                                <CustomButton btnText={btnText} style="btnTabStyle" onClick={onBtnClick}/>
                            ))}
                        </Grid>
                        <Grid item>
                            <Grid container direction="row" justifyContent="center" spacing={3}>
                                {cards ? cards.map(({status, name, from, to, roomNo}) => (
                                    <>
                                        <Grid item xs={12} sm={12} md={4} lg={4}>
                                            <Card style={{ borderRadius: "25px" }}>
                                                <CardContent>
                                                    <Typography gutterBottom style={{ fontWeight: 800, fontSize: 16, color: "red", marginBottom: "2em" }}>
                                                        {status}
                                                    </Typography>
                                                    <Typography gutterBottom style={{ fontWeight: 800, fontSize: 16, marginBottom: "1em", textTransform: "capitalize" }}>
                                                        {name} <br /> {`${from} -  ${to}`}
                                                    </Typography>
                                                    {/* <Typography style={{ fontWeight: 800, fontSize: 16 }}>
                                                        {`${from} -  ${to}`} 
                                                    </Typography> */}
                                                    <Typography variant="body2" style={{ color: "secondary" }}>
                                                        {`Room/Apart No: ${roomNo}`}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">Share</Button>
                                                    <Button size="small">Learn More</Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </>
                                )): "None"}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default Home;