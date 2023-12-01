import { Box, Grid, Typography, Paper } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import LoginForm from './LoginForm/LoginForm';
import login from '../../helpers/APICalls/login';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

function Login(): JSX.Element {
    const classes = useStyles();
    const { updateLoginContext } = useAuth();
    const { updateSnackBarMessage } = useSnackBar();
    const email = "",
          password = "";

    const handleSubmit = (
        { email, password }: { email: string; password: string }, 
        { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
        ) => {
            login(email, password).then((data) => {
                if (data.error) {
                    setSubmitting(false);
                    updateSnackBarMessage(data.error.message);
                } else if (data.success){
                    updateLoginContext(data.success);
                } else {
                    setSubmitting(false);
                    updateSnackBarMessage('An unexpected error occurred. Please try again !');
                }
            });
        }

    return (
        <>
            <Grid container component="main" className={classes.root} spacing={2}>
                {/* <Grid item xs={12} sm={12} md={6} lg={8} >
                    <img src="https://moder-hotel-imgs.s3.amazonaws.com/istanbulTourism.jpg" alt='sign in' className={classes.signinImage} />
                </Grid> */}
                <Grid item component={Paper} xs={12} sm={12} md={6} lg={4}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        minHeight="100vh"
                    >
                        <Box>
                            <Typography variant="h2" className={classes.welcome}>Sign in</Typography>
                        </Box>
                        <LoginForm handleSubmit={handleSubmit} email={email} password={password} />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
  }

export default  Login;